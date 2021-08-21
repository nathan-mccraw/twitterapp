const Logo = process.env.PUBLIC_URL + "/MockingJay.png";

const Home = () => {
  return (
    <div className="container mt-4 ms-0 ms-md-2">
      <div className="row mt-4 align-items-center">
        <div className="col-md-4 mb-4 me-2">
          <img src={Logo} alt="Mocking Jay Logo" style={{ width: "100%" }} />
        </div>
        <div className="col-auto col-md-4 fs-1">
          <div className="row border-bottom">
            <h1
              className="col-auto text-info"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              MockingJay
            </h1>
          </div>
          <div className="row">
            <div
              className="col-auto offset-2 fs-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              A Twitter Proxy
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div
          className="col-auto col-md-4 p-2 mx-auto border border-info border-2 rounded shadow fs-4 fw-light"
          style={{
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          <p>
            Display tweets, timelines, Twitter users, and add/remove favorites.
          </p>
          <p className="text-center mt-4">Click search to start.</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
