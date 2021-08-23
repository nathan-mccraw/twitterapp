import Users from "./Users";
import FavoritesSideBar from "./FavoritesSidebar";
import Tweets from "./Tweets";
import SearchNavbar from "./SearchNavbar";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";

const SearchResults = ({favoriteUsers}) => {
  const [searchedText, setSearchedText] = useState("");
  const [userReturned, setUserReturned] = useState(null);
  const [tweetsReturned, setTweetsReturned] = useState(null);

  let history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/SearchResults/Tweets");
  
    axios
      .get(`/api/getUser/${searchedText}`)
      .then((response) => {
        response.status !== 404
          ? setUserReturned(response.data)
          : setUserReturned("");
      })
      .catch((error) => {
        console.log(error);
        setUserReturned("");
      });
  
    axios
      .get(`/api/getTweets/${searchedText}`)
      .then((response) => {
        response.data.status === 404
          ? setTweetsReturned("")
          : setTweetsReturned(response.data);
      })
      .catch((error) => {
        console.log(error);
        setTweetsReturned("");
      });
  };
  
  const showUserAndTweets = (user) => {
    getUserTweets(user.author_id);
    setUserReturned(user);
  };
  
  const getUserTweets = (userID) => {
    axios
      .get(`/api/getUserTweets/${userID}`)
      .then((response) => {
        response.data.status === 404
          ? setTweetsReturned("")
          : setTweetsReturned(response.data);
      })
      .catch((error) => {
        console.log(error);
        setTweetsReturned("");
      });
  };

  const removeFavorite = (deleteUser) => {
    const newFavoriteUsers = favoriteUsers.filter(
      (user) => user.username !== deleteUser
    );
    setFavoriteUsers(newFavoriteUsers);
  };

  const addFavorite = (newFavorite) => {
    favoriteUsers.length
      ? setFavoriteUsers((usersArray) => [...usersArray, newFavorite])
      : setFavoriteUsers([newFavorite]);
  };

  const isFavorite = (user) => {
    if (isFavorite.length === 0) return false;
    for (const fav of favoriteUsers) {
      if (fav.author_id === user.author_id) return true;
    }
  };

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
