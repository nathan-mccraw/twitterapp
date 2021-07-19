const Tweets = ({ tweetsReturned, addFavorite, getUserTweets }) => {
  const styleIcon = {
    fontSize: "1.5rem",
  };

  if (tweetsReturned === null) {
    return null;
  }
  return (
    <div className="container offset-3">
      {tweetsReturned.map((tweet) => (
        <div id="tweetObject" className="row" key={tweet.id}>
          <div className="col-5 mb-4 p-0 ps-4 pe-3 border border-2 border-info shadow rounded-3">
            <div id="tweetHeader" className="row mb-2 pb-2 border-bottom">
              <div
                id="tweetProfileIMG"
                className="d-flex align-items-center pt-3"
              >
                <div className="col-auto me-2">
                  <img
                    src={tweet.profile_image_url}
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
                <div className="col-auto ms-auto">
                  <button
                    onClick={() => {
                      addFavorite(tweet);
                    }}
                    className="ms-3 border-0 bg-body float-md-end"
                  >
                    <div className="row text-center">
                      <i
                        className="bi bi-person-plus-fill text-info"
                        style={styleIcon}
                      ></i>
                    </div>
                    <div className="row text-center">
                      <h6>Add Fav</h6>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div id="tweetBody" className="row ms-0 pb-1 mb-2 border-bottom">
              {tweet.text}
            </div>
            <div className="row mb-2">
              <div className="col-auto">{tweet.created_at}</div>
              <div className="col-auto">
                <i class="bi bi-arrow-repeat"></i>
                {tweet.public_metrics.retweet_count}
              </div>
              <div className="col-auto">
                <i class="bi bi-hand-thumbs-up"></i>
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

{
  /* <div className="row mt-2 mb-2 justify-content-between align-items-center">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src={tweet.profile_image_url}
                    className="border border-primary p-1 mb-3 rounded-circle shadow"
                    alt="Profile"
                  />
                </div>
                <div
                  className="col-auto h3 text-info ps-0 nav getTweets"
                  onClick={() => getUserTweets(tweet.author_id)}
                >
                  @{tweet.username}
                  <sup>
                    <i className="bi bi-twitter text-info ms-3"></i>
                  </sup>
                </div>
              </div>

              <div className="col-auto">
                <button
                  onClick={() => {
                    addFavorite(tweet);
                  }}
                  className="ms-3 border-0 bg-body float-md-end"
                >
                  <div className="row text-center">
                    <i
                      className="bi bi-person-plus-fill text-info"
                      style={styleIcon}
                    ></i>
                  </div>
                  <div className="row text-center">
                    <h6>Add Fav</h6>
                  </div>
                </button>
              </div>
            </div>
            <div className="row">{tweet.text}</div>
            <div className="row fs-6 font-monospace mt-3">
              {tweet.created_at}
            </div> */
}
