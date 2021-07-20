import Users from "./Users";
import FavoritesSideBar from "./FavoritesSidebar";
import Tweets from "./Tweets";
import SearchNavbar from "./SearchNavbar";
import { Route, Switch } from "react-router";

const SearchResults = ({
  userReturned,
  addFavorite,
  removeFavorite,
  favoriteUsers,
  tweetsReturned,
  getUserTweets,
  showUserAndTweets,
  searchedText,
  setSearchedText,
  handleSubmit,
}) => {
  return (
    <div className="container-fluid pe-0 ps-0">
      <div className="row">
        <div className="col-auto border-end">
          <FavoritesSideBar
            favoriteUsers={favoriteUsers}
            removeFavorite={removeFavorite}
            showUserAndTweets={showUserAndTweets}
          />
        </div>
        <div className="col ps-0">
          <div className="col mb-4 mt-0 pt-0">
            <SearchNavbar
              searchedText={searchedText}
              setSearchedText={setSearchedText}
              handleSubmit={handleSubmit}
            />
          </div>
          <Switch>
            <Route
              exact
              path="/SearchResults/Users"
              render={() => (
                <Users
                  favoriteUsers={favoriteUsers}
                  userReturned={userReturned}
                  addFavorite={addFavorite}
                  getUserTweets={getUserTweets}
                />
              )}
            />
            <Route
              exact
              path="/SearchResults/Tweets"
              render={() => (
                <Tweets
                  favoriteUsers={favoriteUsers}
                  tweetsReturned={tweetsReturned}
                  addFavorite={addFavorite}
                  getUserTweets={getUserTweets}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default SearchResults;
