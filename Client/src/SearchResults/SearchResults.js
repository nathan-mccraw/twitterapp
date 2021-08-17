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
  isViewingTweets,
  setIsViewingTweets,
  isViewingUser,
  setIsViewingUser,
  isFavorite,
  history,
}) => {
  return (
    <div className="container-fluid pe-0 ps-0">
      <div className="row">
        <div className="col-auto d-none d-md-flex border-end">
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
              isViewingTweets={isViewingTweets}
              setIsViewingTweets={setIsViewingTweets}
              isViewingUser={isViewingUser}
              setIsViewingUser={setIsViewingUser}
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
                  isFavorite={isFavorite}
                  history={history}
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
                  isFavorite={isFavorite}
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
