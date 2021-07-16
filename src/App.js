import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import SearchResults from "./SearchResults";
import axios from "axios";

const App = () => {
  const [searchedText, setSearchedText] = useState("");
  const [userReturned, setUserReturned] = useState(null);
  const [tweetsReturned, setTweetsReturned] = useState(null);
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/defaultFavoriteUsers").then((response) => {
      setFavoriteUsers(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`/api/getUser/${searchedText}`).then((response) => {
      response.status !== 404
        ? setUserReturned(response.data)
        : setUserReturned(null);
    });

    axios.get(`/api/getTweets/${searchedText}`).then((response) => {
      response.data.status === 404
        ? setTweetsReturned(null)
        : setTweetsReturned(response.data.data);
    });
  };

  const getUserTweets = (user) => {
    axios.get(`/api/getUserTweets/${user.id}`).then(({ data }) => {
      const tweets = data.data;
      const tweetsData = tweets.map((tweet) => {
        tweet.username = user.username;
        tweet.profile_image_url = user.profile_image_url;
        return tweet;
      });
      setTweetsReturned(tweetsData);
      console.log(tweetsData);
    });
  };

  const removeFavorite = (deleteUser) => {
    const newFavoriteUsers = favoriteUsers.filter(
      (user) => user.username !== deleteUser
    );
    setFavoriteUsers(newFavoriteUsers);
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
              tweetsReturned={tweetsReturned}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favoriteUsers={favoriteUsers}
              getUserTweets={getUserTweets}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
