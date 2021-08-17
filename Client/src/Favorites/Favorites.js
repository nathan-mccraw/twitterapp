import noReturnIMG from "../pictures/NoReturn.jpg";

const Favorites = ({ favoriteUsers, showRandomTweetModal }) => {
  if (favoriteUsers.length === 0 || !favoriteUsers)
    return (
      <div className="container-fluid text-center">
        <img
          src={noReturnIMG}
          alt="disconnected"
          style={{ width: "300px" }}
          className="mt-4"
        />
      </div>
    );

  return (
    <div className="container-fluid m-4">
      <div className="row me-4">
        {favoriteUsers.map((user) => (
          <div
            className="col-auto col-md-2 m-4 ps-0 pe-0 border border-info shadow rounded-3 getRandomTweets"
            onClick={() => {
              showRandomTweetModal(user);
            }}
          >
            <div className="row justify-content-center m-3 mb-0 ps-1 pe-1">
              <img
                src={user.profile_image_url}
                style={{ width: "250px" }}
                className="border shadow-sm p-1"
                alt="Profile"
              />
            </div>
            <div className="row justify-content-center text-info h5 mt-1 mb-0">
              @{user.username}
            </div>
            <div className="row justify-content-center">{user.name}</div>
            <div className="row justify-content-center">
              {user.location ? user.location : "Location Unknown"}
            </div>
            <div className="row mt-3 ms-1 me-1 justify-content-between">
              <div className="col-auto">
                <div className="row" style={{ fontSize: "small" }}>
                  Tweets
                </div>
                <div className="row">{user.public_metrics.tweet_count}</div>
              </div>
              <div className="col-auto">
                <div className="row" style={{ fontSize: "small" }}>
                  Followers
                </div>
                <div className="row">{user.public_metrics.followers_count}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
