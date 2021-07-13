import Navbar from "./Navbar";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import SearchResults from "./SearchResults";
import Favorites from "./Favorites";
import Info from "./Info";

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
          render={() => <SearchResults tweet={tweet} />}
        />
        <Route
          exact
          path="/Favorites"
          render={() => <Favorites setSearchedUser={setSearchedUser} />}
        />
        <Route exact path="/Info" render={() => <Info />} />
      </Switch>
    </div>
  );
};

export default App;
