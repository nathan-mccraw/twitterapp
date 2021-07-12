import Navbar from "./Navbar";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import SearchResults from "./SearchResults";
import Favorites from "./Favorites";

const App = () => {
  const [tweet, setTweet] = useState("");
  const [getTweets, setGetTweets] = useState("");
  const [searchedUser, setSearchedUser] = useState("");
  const [sentToAPI, setSentToAPI] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentToAPI(searchedUser);
  };

  const dummyData = {};

  return (
    <div className="App">
      <Navbar
        searchedUser={searchedUser}
        setSearchedUser={setSearchedUser}
        handleSubmit={handleSubmit}
      />
      <h1>{sentToAPI}</h1>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/SearchResults"
          render={() => <SearchResults tweet={tweet} />}
        />
        <Route
          exact
          path="/Favorites"
          render={() => <Favorites setSearchedUser={setSearchedUser} />}
        />
      </Switch>
    </div>
  );
};

export default App;
