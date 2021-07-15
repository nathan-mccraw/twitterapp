import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import SearchResults from "./SearchResults";
import axios from "axios";

const App = () => {
  const [searchedText, setSearchedText] = useState("");
  const [userReturned, setUserReturned] = useState("");
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/defaultFavoriteUsers").then((response) => {
      setFavoriteUsers(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`/api/getUser/${searchedText}`).then((response) => {
      setUserReturned(response.data);
    });
  };

  const removeFavorite = (deleteUser) => {
    const newFavoriteUsers = favoriteUsers.filter(
      (user) => user.username !== deleteUser
    );
    setFavoriteUsers(newFavoriteUsers);
  };

  //Axios request using "searchedUser" as a value: `https://api.twitter.com/2/users/by/username/:${searchedText}?user.fields=profile_image_url`
  //pass return object to SearchResults

  let searchReturn = {
    data: {
      // name: "Nathan McCraw",
      // profile_image_url:
      //   "https://pbs.twimg.com/profile_images/1414355333313667076/COFk-GPQ_normal.jpg",
      // id: "887162430",
      // username: "NateRLTW175",
      username: "elonmusk",
      name: "Elon Musk",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1404334078388670466/DgO3WL4S_normal.jpg",
      id: "44196397",
    },
  };

  const addFavorite = () => {
    const newFavorite = userReturned.data;
    favoriteUsers.length
      ? setFavoriteUsers((usersArray) => [...usersArray, newFavorite])
      : setFavoriteUsers([newFavorite]);
  };

  return (
    <div className="App">
      <Navbar
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        handleSubmit={handleSubmit}
      />
      <div
        id="banner"
        className="border-top border-bottom border-2 border-info"
      ></div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/Home/HowToSearch" render={() => <Home />} />
        <Route exact path="/Home/HowToFavorites" render={() => <Home />} />
        <Route
          exact
          path="/SearchResults"
          render={() => (
            <SearchResults
              userReturned={userReturned}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favoriteUsers={favoriteUsers}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
