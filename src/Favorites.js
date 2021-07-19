const Favorites = ({ favoriteUsers, removeFavorite, showUserAndTweets }) => {
  const styleIcon = {
    fontSize: "1rem",
  };
  return (
    <div className="col-auto mt-4">
      <div className="row mb-4 border-bottom">
        <div className="d-line h6">Favorites List</div>
      </div>
      <ul>
        {favoriteUsers.map((user) => (
          <li key={user.username} className="col-auto d-flex mt-3">
            <button
              onClick={() => showUserAndTweets(user)}
              className="border rounded-pill ps-3 pe-3 shadow-sm bg-body"
            >
              @{user.username}
            </button>
            <button
              onClick={() => removeFavorite(user.username)}
              className="ms-4 border-0 bg-body text-info float-md-end"
            >
              <i className="bi bi-person-dash-fill" style={styleIcon}></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Favorites;
