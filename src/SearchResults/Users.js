import noReturnIMG from "../pictures/NoReturn.jpg";

const Users = ({ userReturned, addFavorite, getUserTweets }) => {
  const styleIcon = {
    fontSize: "1.5rem",
  };

  if (!userReturned)
    return (
      <div className="text-center">
        <img src={noReturnIMG} alt="disconnected" style={{ width: "400px" }} />
      </div>
    );

  return (
    <div className="container offset-3">
      <div className="col-auto mb-4">
        <div className="row">
          <div className="col-auto border border-info border-2 rounded p-2 shadow">
            <div className="row p-2 mb-2 justify-content-between align-items-center">
              <div className="col-auto me-1">
                <img
                  src={userReturned.profile_image_url}
                  style={{ width: "100px" }}
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
                  <div className="row h6 text-center">Add Fav</div>
                </button>
              </div>
            </div>
            <div className="row ps-2 justify-content-center">
              <div className="col-auto">{userReturned.name}</div>
              <div className="col-auto">
                <i className="bi bi-dot"></i>
              </div>
              <div className="col-auto">
                {userReturned.location
                  ? userReturned.location
                  : "Location Unknown"}
              </div>
              <div className="col-auto">
                <i className="bi bi-dot"></i>
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