import searchPicture from "../pictures/SearchPicture.jpg";
import homePicture from "../pictures/homePicture.jpg";

const HowToSearch = () => {
  return (
    <div className="clearfix">
      <img
        src={searchPicture}
        className="col-md-4 float-md-end mb-3 ms-md-3"
        alt="Depicted Search Input"
      />
      <p>
        The search tab will display an input field that will search for a
        <b>USER NAME</b> and tweet content. Navigation between searching for
        users or searching for tweet content is done by clicking the
        corresponding tab beside the input field. The results will appear in the
        main body of the web browser.
      </p>
      <p>
        Clicking on a user in the favorites list located on the left side of the
        screen will display that Twitter user's timeline. You can remove users
        from the favorites list by clicking the corresponding icon beside the
        users name on the favorites list. You can add Twitter users to the
        favorites list by clicking on the corresponding icon beside the user on
        the search results.
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
