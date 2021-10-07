import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import axios from "axios";
import Navbar from "./Navbar";
import About from "./About/About";
import SearchResults from "./SearchResults/SearchResults";
import Favorites from "./Favorites/Favorites";
import RandomTweetModal from "./Favorites/RandomTweetModal";
import Home from "./Home/Home";

const App = () => {
  const [favoriteUsers, setFavoriteUsers] = useState([]);
  const [randomTweet, setRandomTweet] = useState("");
  const [isRandomTweetModalOpen, setIsRandomTweetModalOpen] = useState(false);

  useEffect(() => {
    axios.get("/api/defaultFavoriteUsers").then((response) => {
      setFavoriteUsers(response.data);
      const index = Math.floor(Math.random() * 5);
      getRandomTweet(response.data[index].author_id);
    });
  }, []);

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

  const showRandomTweetModal = (user) => {
    setIsRandomTweetModalOpen(true);
    getRandomTweet(user.author_id);
  };

  const hideRandomTweetModal = () => setIsRandomTweetModalOpen(false);

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
              favoriteUsers={favoriteUsers}
              setFavoriteUsers={setFavoriteUsers}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
