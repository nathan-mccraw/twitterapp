import Users from "./Users";
import Favorites from "./Favorites";
import Tweets from "./Tweets";

const SearchResults = ({
  userReturned,
  addFavorite,
  removeFavorite,
  favoriteUsers,
  tweetsReturned,
  getUserTweets,
  showUserAndTweets,
}) => {
  return (
    <div className="container mt-4 ms-4">
      <div className="row">
        <div className="col-auto border-end">
          <Favorites
            favoriteUsers={favoriteUsers}
            removeFavorite={removeFavorite}
            showUserAndTweets={showUserAndTweets}
          />
        </div>
        <div className="col-6 offset-2 ps-4">
          {userReturned && (
            <Users
              favoriteUsers={favoriteUsers}
              userReturned={userReturned}
              addFavorite={addFavorite}
              getUserTweets={getUserTweets}
            />
          )}
          {tweetsReturned && (
            <Tweets
              favoriteUsers={favoriteUsers}
              tweetsReturned={tweetsReturned}
              addFavorite={addFavorite}
              getUserTweets={getUserTweets}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchResults;
