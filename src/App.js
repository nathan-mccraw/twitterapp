import Navbar from "./Navbar";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import SearchResults from "./SearchResults";
import Info from "./Info";

const App = () => {
  const [searchedUser, setSearchedUser] = useState("");
  const [sentToAPI, setSentToAPI] = useState("");
  const [favoriteUsers, setFavoriteUsers] = useState([
    {
      username: "elonmusk",
      name: "Elon Musk",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1404334078388670466/DgO3WL4S_normal.jpg",
      id: "44196397",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentToAPI(searchedUser);
  };

  const removeFavorite = (deleteUser) => {
    const newFavoriteUsers = favoriteUsers.filter(
      (user) => user.username !== deleteUser
    );
    setFavoriteUsers(newFavoriteUsers);
  };

  //Axios request using "searchedUser" as a value: `https://api.twitter.com/2/users/by/username/:${searchedUser}?user.fields=profile_image_url`
  //pass return object to SearchResults

  let searchReturn = {
    data: {
      name: "Nathan McCraw",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1414355333313667076/COFk-GPQ_normal.jpg",
      id: "887162430",
      username: "NateRLTW175",
    },
  };

  const addFavorite = () => {
    const newFavorite = searchReturn.data;
    // const usersArray = favoriteUsers;
    favoriteUsers.length
      ? setFavoriteUsers((usersArray) => [...usersArray, newFavorite])
      : setFavoriteUsers([newFavorite]);
    console.log(favoriteUsers);
  };

  return (
    <div className="App">
      <Navbar
        searchedUser={searchedUser}
        setSearchedUser={setSearchedUser}
        handleSubmit={handleSubmit}
      />
      <div
        id="banner"
        className="border-top border-bottom border-2 border-info"
      >
        {sentToAPI}
      </div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/Home/HowToSearch" render={() => <Home />} />
        <Route exact path="/Home/HowToFavorites" render={() => <Home />} />
        <Route
          exact
          path="/SearchResults"
          render={() => (
            <SearchResults
              searchReturn={searchReturn}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favoriteUsers={favoriteUsers}
            />
          )}
        />
        <Route exact path="/Info" render={() => <Info />} />
      </Switch>
    </div>
  );
};

export default App;
