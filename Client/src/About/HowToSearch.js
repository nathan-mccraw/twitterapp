const searchPicture = process.env.PUBLIC_URL + "/SearchPicture.jpg";
const favoritesListPicture = process.env.PUBLIC_URL + "/favoritesList.jpg";
const addFavoritesPicture = process.env.PUBLIC_URL + "/addFavorites.jpg";

const HowToSearch = () => {
  return (
    <div className="clearfix">
      <p>
        The search tab will display an input field that will search for a
        <b> USER NAME</b> and tweet content. Navigation between searching for
        users or searching for tweet content is done by clicking the
        corresponding tab beside the input field. The results will appear in the
        main body of the web browser.
      </p>
      <img
        src={searchPicture}
        className="col-md-4 col-12 float-md-end mt-2 ms-md-3"
        alt="Depicted Search Input"
      />
      <p>
        Clicking on a user in the favorites list located on the left side of the
        browser will display that Twitter user's timeline. You can remove users
        from the favorites list by clicking the corresponding icon beside the
        users name on the favorites list. You can add Twitter users to the
        favorites list by clicking on the corresponding icon beside the user on
        the search results.
      </p>
      <img
        src={favoritesListPicture}
        className="col-md-4 col-12 float-md-start me-1 ms-md-3"
        alt="Depicted Search Input"
        style={{ width: "10em" }}
      />
      <p>
        If you wish to return to these instructions, you may navigate to the
        root home page or by selectiong <i>About</i> in the navbar at the top of
        the screen.
      </p>
      <img
        src={addFavoritesPicture}
        className="col-md-4 col-12 mx-auto d-block mb-3"
        alt="Depicted Search Input"
      />
    </div>
  );
};
export default HowToSearch;
