import searchPicture from "./pictures/SearchPicture.jpg";
import homePicture from "./pictures/homePicture.jpg";

const HowToSearch = () => {
  return (
    <div className="clearfix">
      {/* <h3 className="text-center mb-3">How To Use 'Search'</h3> */}
      <img
        src={searchPicture}
        className="col-md-4 float-md-end mb-3 ms-md-3"
        alt="Depicted Search Input"
      />
      <p>
        The search feature is located in the top left of your web browser. You
        can use this input field to enter any <b>USER NAME</b> that you wish to
        search. The results will appear in the main body of the web browser.
      </p>
      <p>
        If you navigate away from the search results, for example to your{" "}
        <i>favorites</i> page, you can return to the search results by clicking
        the <i>Return to Search Results</i> option that will always be located
        on the left side of the screen. If you do not see the{" "}
        <i>Return to Search Results</i> option, then you have not initiated a
        search or the search has been cleared and is no longer available.
      </p>
      <p>
        If you wish to return to these instructions, you may navigate to the
        root home page or by selectiong <i>MockingJay</i> in the navbar at the
        top of the screen.
      </p>
      <img
        src={homePicture}
        className="col-md-4 float-md-bottom mb-3 ms-md-3"
        alt="Depicted Search Input"
      />
    </div>
  );
};
export default HowToSearch;
