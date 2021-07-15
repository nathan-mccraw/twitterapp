import Users from "./Users";
import Favorites from "./Favorites";

const SearchResults = ({
  searchReturn,
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
        <Users searchReturn={searchReturn} addFavorite={addFavorite} />
      </div>
    </div>
  );
};
export default SearchResults;
