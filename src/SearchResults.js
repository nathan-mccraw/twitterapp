import Users from "./Users";
import Favorites from "./Favorites";

const SearchResults = ({
  userReturned,
  addFavorite,
  removeFavorite,
  favoriteUsers,
}) => {
  return (
    <div className="container mt-4 ms-4">
      <div className="row">
        <Favorites
          favoriteUsers={favoriteUsers}
          removeFavorite={removeFavorite}
        />
        {userReturned && (
          <Users userReturned={userReturned} addFavorite={addFavorite} />
        )}
      </div>
    </div>
  );
};
export default SearchResults;
