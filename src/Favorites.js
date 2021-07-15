const Favorites = ({ favoriteUsers, removeFavorite }) => {
  const styleIcon = {
    fontSize: "1rem",
  };
  return (
    <div className="col-auto me-4 border-end">
      <div className="row mb-4 border-bottom">
        <div className="d-line h6">Favorites List</div>
      </div>
      <ul>
        {favoriteUsers.map((user) => (
          <li key={user.username} className="col-auto d-flex mt-2">
            @{user.username}
            <button
              onClick={() => removeFavorite(user.username)}
              className="ms-4 border-0 bg-body float-md-end"
            >
              <i
                className="bi bi-person-dash-fill text-info"
                style={styleIcon}
              ></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Favorites;
