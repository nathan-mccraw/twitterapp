import Navbar from "./Navbar";
import { Route, Switch } from "react-router";
import Home from "./Home";
import SearchResults from "./SearchResults";
import Favorites from "./Favorites";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/SearchResults" render={() => <SearchResults />} />
        <Route exact path="/Favorites" render={() => <Favorites />} />
      </Switch>
    </div>
  );
};

export default App;
