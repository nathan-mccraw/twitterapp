import Logo from "../pictures/Mockingjay.png";

const Home = () => {
  return (
    <div className="container mt-4 ms-2">
      <div className="row mt-4">
        <div className="col-auto me-2">
          <img src={Logo} alt="Mocking Jay Logo" style={{ width: "40rem" }} />
        </div>

        <div className="col-6">
          <div className="row border-bottom">
            <h1 className="col-6 text-info">MockingJay</h1>
          </div>
          <div className="row">
            <div className="col offset-1">A Twitter Proxy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
