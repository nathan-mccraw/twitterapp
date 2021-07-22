import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import About from "./About/About";
import SearchResults from "./SearchResults/SearchResults";
import Favorites from "./Favorites/Favorites";
import RandomTweetModal from "./Favorites/RandomTweetModal";
import Home from "./Home/Home";

const App = () => {
  const [searchedText, setSearchedText] = useState("");
  const [userReturned, setUserReturned] = useState(null);
  const [tweetsReturned, setTweetsReturned] = useState(null);
  const [favoriteUsers, setFavoriteUsers] = useState([]);
  const [randomTweet, setRandomTweet] = useState("");
  const [isRandomTweetModalOpen, setIsRandomTweetModalOpen] = useState(false);
  const [isViewingTweets, setIsViewingTweets] = useState(false);
  const [isViewingUser, setIsViewingUser] = useState(false);
  let history = useHistory();

  useEffect(() => {
    axios.get("/api/defaultFavoriteUsers").then((response) => {
      setFavoriteUsers(response.data);
      const index = Math.floor(Math.random() * 5);
      getRandomTweet(response.data[index].author_id);
    });
    // setTweetsReturned(testTweets);
    // setFavoriteUsers(testFavorites);
    // setUserReturned(testUser);
  }, []);

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

  const getRandomTweet = (userID) => {
    axios
      .get(`/api/getUserTweets/${userID}`)
      .then((response) => {
        if (response.data.status === 404) setRandomTweet("");
        else {
          const index = Math.floor(Math.random() * 25);
          setRandomTweet(response.data[index]);
        }
      })
      .catch((error) => {
        console.log(error);
        setRandomTweet("");
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

  const showRandomTweetModal = (user) => {
    setIsRandomTweetModalOpen(true);
    getRandomTweet(user.author_id);
  };

  const hideRandomTweetModal = () => setIsRandomTweetModalOpen(false);

  const isFavorite = (user) => {
    if (isFavorite.length === 0) return false;
    for (const fav of favoriteUsers) {
      if (fav.author_id === user.author_id) return true;
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="position-fixed dflex justify-content-center align-items-center">
        <RandomTweetModal
          isRandomTweetModalOpen={isRandomTweetModalOpen}
          hideRandomTweetModal={hideRandomTweetModal}
          randomTweet={randomTweet}
        />
      </div>
      <div
        id="banner"
        className="border-top border-bottom border-2 border-info"
      ></div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/AboutMockingJay" render={() => <About />} />
        <Route
          exact
          path="/AboutMockingJay/HowToSearch"
          render={() => <About />}
        />
        <Route
          exact
          path="/AboutMockingJay/HowToFavorites"
          render={() => <About />}
        />
        <Route
          exact
          path="/Favorites"
          render={() => (
            <Favorites
              favoriteUsers={favoriteUsers}
              isRandomTweetModalOpen={isRandomTweetModalOpen}
              showRandomTweetModal={showRandomTweetModal}
              hideRandomTweetModal={hideRandomTweetModal}
            />
          )}
        />
        <Route
          path="/SearchResults"
          render={() => (
            <SearchResults
              userReturned={userReturned}
              tweetsReturned={tweetsReturned}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favoriteUsers={favoriteUsers}
              getUserTweets={getUserTweets}
              showUserAndTweets={showUserAndTweets}
              searchedText={searchedText}
              setSearchedText={setSearchedText}
              handleSubmit={handleSubmit}
              isViewingTweets={isViewingTweets}
              setIsViewingTweets={setIsViewingTweets}
              isViewingUser={isViewingUser}
              setIsViewingUser={setIsViewingUser}
              isFavorite={isFavorite}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
