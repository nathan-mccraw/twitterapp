const Users = ({ userReturned, addFavorite, getUserTweets }) => {
  const styleIcon = {
    fontSize: "1.5rem",
  };

  if (userReturned === null) return null;

  return (
    <div className="col-auto">
      <div className="row ps-2 h4">Users:</div>
      <div className="row">
        <div className="col-auto offset-1 border border-info border-2 rounded p-2 shadow h3 text-info">
          <img
            src={userReturned.profile_image_url}
            className="me-3 rounded-circle"
            alt="Profile"
          />{" "}
          <span onClick={() => getUserTweets(userReturned.author_id)}>
            @{userReturned.username}
          </span>
          <button
            onClick={() => {
              addFavorite(userReturned);
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
  );
};

export default Users;
