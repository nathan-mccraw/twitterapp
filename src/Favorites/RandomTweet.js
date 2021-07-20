import noReturnIMG from "../pictures/NoReturn.jpg";

const RandomTweet = ({ randomTweet }) => {
  console.log(randomTweet);
  if (!randomTweet)
    return (
      <div className="text-center">
        <img src={noReturnIMG} alt="disconnected" style={{ width: "400px" }} />
      </div>
    );

  return (
    <div className="container offset-3">
      <div id="tweetObject" className="row" key={randomTweet.id}>
        <div className="col-6 mb-4 p-0 ps-4 pe-3 border border-2 border-info shadow rounded-3">
          <div id="tweetHeader" className="row mb-2 pb-2 border-bottom">
            <div
              id="tweetProfileIMG"
              className="d-flex align-items-center pt-3"
            >
              <div className="col-auto me-2">
                <img
                  src={randomTweet.profile_image_url}
                  style={{ width: "100px" }}
                  className="border border-primary p-1 rounded-circle shadow"
                  alt="Profile"
                />
              </div>
              <div className="col-auto">
                <div className="row h3 ms-0 mb-0 me-2 text-info getTweets">
                  @{randomTweet.username}
                </div>
                <div className="row ms-0 ps-4">{randomTweet.name}</div>
              </div>
            </div>
          </div>
          <div id="tweetBody" className="row ms-0 pb-1 mb-2 border-bottom">
            {randomTweet.text}
          </div>
          <div className="row mb-2">
            <div className="col-auto">{randomTweet.created_at}</div>
            <div className="col-auto">
              <i className="bi bi-arrow-repeat"></i>
              {randomTweet.public_metrics.retweet_count}
            </div>
            <div className="col-auto">
              <i className="bi bi-hand-thumbs-up"></i>
              {randomTweet.public_metrics.like_count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomTweet;
