import HowToSearch from "./HowToResults";
import HowToFavorites from "./HowToFavorites";
import AboutHome from "./AboutHome";
import Logo from "./pictures/Mockingjay.png";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

const Home = () => {
  const styleIcon = {
    fontSize: "2rem",
  };

  return (
    <div className="container">
      <div className="col align-items-center justify-content-center mt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-10 border border-info border-2 p-4 shadow-lg">
            <div className="clearfix">
              <img
                src={Logo}
                className="col-md-4 float-md-start me-4 mt-n1 ms-md-3"
                id="infoLogo"
                alt="Mocking Jay Logo mb-4"
              />
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-10">
                    <h1 className="border-bottom pb-4 text-info">
                      MockingJay -- A Twitter Proxy
                    </h1>
                  </div>
                  <div className="col-1 d-flex justify-content-end">
                    <div className="container">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        activeClassName="activeLink"
                        exact
                        to="/"
                      >
                        <div className="row text-center">
                          <i
                            className="bi bi-house-fill text-info"
                            style={styleIcon}
                          ></i>
                        </div>
                        <div className="row text-center">
                          <h6>home</h6>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Switch>
              <Route exact path="/" render={() => <AboutHome />} />
              <Route
                exact
                path="/Home/HowToSearch"
                render={() => <HowToSearch />}
              />
              <Route
                exact
                path="/Home/HowToFavorites"
                render={() => <HowToFavorites />}
              />
            </Switch>
          </div>
          <div className="row justify-content-center text-center mt-3">
            <div className="col h2">
              <NavLink
                className="nav-link active"
                aria-current="page"
                activeClassName="activeLink"
                exact
                to="/Home/HowToSearch"
              >
                How To Use 'Search'
              </NavLink>
            </div>
            <div className="col h2">
              <NavLink
                className="nav-link active"
                aria-current="page"
                activeClassName="activeLink"
                exact
                to="/Home/HowToFavorites"
              >
                How To Use 'Favorites'
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
