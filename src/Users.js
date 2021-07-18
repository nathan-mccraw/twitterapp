const Users = ({ userReturned, addFavorite, getUserTweets }) => {
  const styleIcon = {
    fontSize: "1.5rem",
  };

  if (userReturned === null) return null;

  return (
    <div className="container">
      <div className="col-auto mb-4">
        <div className="row h4">Users:</div>
        <div className="row">
          <div className="col-auto border border-info border-2 rounded p-2 shadow">
            <div className="row p-2 mb-2 justify-content-between align-items-center">
              <div className="col-auto me-1">
                <img
                  src={userReturned.profile_image_url}
                  className="border border-primary p-1 rounded-circle"
                  alt="Profile"
                />{" "}
              </div>
              <div
                className="col-auto h3 text-info getTweets"
                onClick={() => getUserTweets(userReturned.author_id)}
              >
                @{userReturned.username}
                <sup>
                  <i className="bi bi-twitter text-info ms-2"></i>
                </sup>
              </div>
              <div className="col-auto">
                <button
                  onClick={() => {
                    addFavorite(userReturned);
                  }}
                  className="col ms-3 border-0 bg-body float-md-end"
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
            <div className="row ps-2 justify-content-center">
              <div className="col-auto">{userReturned.name}</div>
              <div className="col-auto">
                <i class="bi bi-dot"></i>
              </div>
              <div className="col-auto">{userReturned.location}</div>
              <div className="col-auto">
                <i class="bi bi-dot"></i>
              </div>
              <div className="col-auto">
                {userReturned.public_metrics.followers_count} Follows
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
