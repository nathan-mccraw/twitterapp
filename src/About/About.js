import HowToSearch from "./HowToSearch";
import HowToFavorites from "./HowToFavorites";
import AboutMockingJay from "./AboutInfo";
import Logo from "../pictures/Mockingjay.png";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

const About = () => {
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
                <div className="row justify-content-start">
                  <div className="col-9">
                    <h1
                      className="border-bottom pb-4 text-info"
                      style={{ fontFamily: "'Pacifico', cursive" }}
                    >
                      MockingJay -- Twitter Proxy
                    </h1>
                  </div>
                  <div className="col-3">
                    <div className="container">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        activeClassName="activeLink"
                        exact
                        to="/AboutMockingJay"
                      >
                        <div className="row text-center">
                          <i
                            className="bi bi-house-fill text-info"
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </div>
                        <div className="row text-center">
                          <h6>About Home</h6>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Switch>
              <Route
                exact
                path="/AboutMockingJay"
                render={() => <AboutMockingJay />}
              />
              <Route
                exact
                path="/AboutMockingJay/HowToSearch"
                render={() => <HowToSearch />}
              />
              <Route
                exact
                path="/AboutMockingJay/HowToFavorites"
                render={() => <HowToFavorites />}
              />
            </Switch>
            <div className="row justify-content-center border-top text-center mt-2 mb-0 pt-2 pb-0">
              <div className="col h3">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  activeClassName="activeLink active"
                  exact
                  to="/AboutMockingJay/HowToSearch"
                >
                  How To Use 'Search'
                </NavLink>
              </div>
              <div className="col h3">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  activeClassName="activeLink active"
                  exact
                  to="/AboutMockingJay/HowToFavorites"
                >
                  How To Use 'Favorites'
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
