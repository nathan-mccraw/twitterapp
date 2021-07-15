const Users = ({ searchReturn, addFavorite }) => {
  const styleIcon = {
    fontSize: "2rem",
  };
  return (
    <div className="col">
      <div className="row ps-2 h1">Users:</div>
      <div className="row">
        <div className="col-auto offset-2 border border-info border-2 p-4 shadow-lg h1 text-info">
          <img
            src={searchReturn.data.profile_image_url}
            className="me-3"
            alt="Profile"
          />
          @{searchReturn.data.username}
          <button
            onClick={addFavorite}
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
