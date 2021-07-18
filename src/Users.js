const Users = ({ userReturned, addFavorite }) => {
  const styleIcon = {
    fontSize: "1.5rem",
  };

  if (userReturned === null) return null;

  return (
    <div className="col-auto">
      <div className="row ps-2 h4">Users:</div>
      <div className="row">
        <div className="col-auto offset-1 border border-info border-2 p-2 shadow-lg h3 text-info">
          <img
            src={userReturned.data.profile_image_url}
            className="me-3"
            alt="Profile"
          />
          @{userReturned.data.username}
          <button
            onClick={() => {
              addFavorite(userReturned.data);
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
