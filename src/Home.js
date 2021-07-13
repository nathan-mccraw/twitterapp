import searchPicture from "./pictures/SearchPicture.jpg";
import homePicture from "./pictures/homePicture.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="col align-items-center justify-content-center mt-4">
        <div className="row">
          <div className="border border-info border-2 p-4 shadow-lg">
            <div className="clearfix">
              <img
                src={searchPicture}
                class="col-md-4 float-md-end mb-3 ms-md-3"
                alt="Depicted Search Input"
              />
              <p>
                The search feature is located in the top left of your web
                browser. You can use this input field to enter any{" "}
                <b>USER NAME</b> that you wish to search. The results will
                appear in the main body of the web browser.
              </p>
              <p>
                If you navigate away from the search results, for example to
                your <i>favorites</i> page, you can return to the search results
                by clicking the <i>Return to Search Results</i> option that will
                always be located on the left side of the screen. If you do not
                see the <i>Return to Search Results</i> option, then you have
                not initiated a search or the search has been cleared and is no
                longer available.
              </p>
              <p>
                If you wish to return to these instructions, you may navigate to
                the root home page or by selectiong <i>MockingJay</i> in the
                navbar at the top of the screen.
              </p>
              <img
                src={homePicture}
                class="col-md-4 float-md-bottom mb-3 ms-md-3"
                alt="Depicted Search Input"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center mt-3">
          <div className="col h2">How To Use 'Search'</div>
          <div className="col h2">How To Use 'Favorites'</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
