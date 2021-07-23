import noReturnIMG from "../pictures/NoReturn.jpg";

const Tweets = ({ tweetsReturned, addFavorite, getUserTweets, isFavorite }) => {
  if (!tweetsReturned)
    return (
      <div className="text-center">
        <img src={noReturnIMG} alt="disconnected" style={{ width: "400px" }} />
      </div>
    );

  return (
    <div className="container offset-3">
      {tweetsReturned.map((tweet) => (
        <div id="tweetObject" className="row" key={tweet.id}>
          <div className="col-6 mb-4 p-0 ps-4 pe-3 border border-2 border-info shadow rounded-3">
            <div id="tweetHeader" className="row mb-2 pb-2 border-bottom">
              <div
                id="tweetProfileIMG"
                className="d-flex align-items-center pt-3"
              >
                <div className="col-auto me-2">
                  <img
                    src={tweet.profile_image_url}
                    style={{ width: "100px" }}
                    className="border border-primary p-1 rounded-circle shadow"
                    alt="Profile"
                  />
                </div>
                <div className="col-auto">
                  <div
                    className="row h3 ms-0 mb-0 me-2 text-info getTweets"
                    onClick={() => getUserTweets(tweet.author_id)}
                  >
                    @{tweet.username}
                  </div>
                  <div className="row ms-0 ps-4">{tweet.name}</div>
                </div>
                {!isFavorite(tweet) ? (
                  <div className="col-auto ms-auto">
                    <button
                      onClick={() => {
                        addFavorite(tweet);
                      }}
                      className="col ms-3 border-0 bg-body float-md-end"
                    >
                      <div className="row text-center">
                        <i
                          className="bi bi-person-plus-fill text-info"
                          style={{ fontSize: "1.5rem" }}
                        ></i>
                      </div>
                      <div className="row h6 text-center">Add Fav</div>
                    </button>
                  </div>
                ) : (
                  <div className="col-auto ms-auto text-center border-0">
                    <i
                      className="bi bi-person-check-fill text-info"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </div>
                )}
              </div>
            </div>
            <div id="tweetBody" className="row ms-0 pb-1 mb-2 border-bottom">
              {tweet.text}
            </div>
            {tweet.hasOwnProperty("attachments") && (
              <div className="row justify-content-center">
                {tweet.attachments.media.photos.map((media) => (
                  <img src={media.url} className="mb-2 pb-2 border-bottom" />
                ))}
              </div>
            )}
            <div className="row mb-2">
              <div className="col-auto">{tweet.created_at}</div>
              <div className="col-auto">
                <i className="bi bi-arrow-repeat"></i>
                {tweet.public_metrics.retweet_count}
              </div>
              <div className="col-auto">
                <i className="bi bi-hand-thumbs-up"></i>
                {tweet.public_metrics.like_count}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweets;
