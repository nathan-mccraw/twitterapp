const Tweets = ({ tweetsReturned, addFavorite, getUserTweets }) => {
  const styleIcon = {
    fontSize: "1.5rem",
  };

  const formatDate = (dateInput) => {
    let date = new Date(dateInput);
    const options = {
      dateStyle: "medium",
      timeZone: "UTC",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  if (tweetsReturned === null) {
    return null;
  }
  return (
    <div className="container">
      <div className="row h4">Tweets:</div>
      {tweetsReturned.map((tweet) => (
        <div className="row">
          <div
            key={tweet.id}
            className="border border-2 border-info mb-0 ps-3 pe-3 pb-0"
          >
            <div className="row mt-2 mb-2 justify-content-between align-items-center">
              <div className="col-auto align-items-center">
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
            <div className="row font-monospace">{tweet.text}</div>
            <div className="row fs-6 font-monospace mt-3">
              {formatDate(tweet.created_at)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweets;
