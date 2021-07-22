import favoritesTab from "../pictures/favoritesTab.JPG";
import SearchNavbar from "../pictures/SearchNavBar.jpg";

const HowToFavorites = () => {
  return (
    <div className="clearfix">
      <img
        src={SearchNavbar}
        className="col-md-4 float-md-end mb-3 ms-md-3"
        alt="Depicted Search Input"
      />
      <p>
        The "Favorites List" is located in two locations, in the left sidebar on
        the search page, and by navigating to the Favorites tab the main Navbar
        (top of the browser).
      </p>
      <p>
        By default, the favorites list contains five Twitter users. If you wish
        to add a user to the favorites list, you need to search for the Twitter
        user by username without the "@" symbol in the 'search' input field. The
        search results will always show twitter content by default. Click on
        "users" beside the search input. If a user matches your search, then
        this user will be displayed here. Due to limitations of the Twitter API,
        MockingJay currently only supports a single, exact match, username
        search. Click on the "Add Fav" icon located beside the username to add
        this user to your favorite's list. You may also add a user to your
        favorites list, via the same method, when viewing the tweet content
        search results. You will see this user added to the left side of the
        screen.
      </p>
      <img
        src={favoritesTab}
        className="col-md-4 float-md-start mb-3 ms-md-3"
        alt="Depicted Search Input"
      />
      <p>
        The Favorites tab displays additional public metrics. Clicking on a
        favorite user will display a random tweet from that user.
      </p>
    </div>
  );
};
export default HowToFavorites;
