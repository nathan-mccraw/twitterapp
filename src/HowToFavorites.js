const HowToFavorites = () => {
  return (
    <div className="clearfix">
      {/* <h3 className="text-center mb-3">How To Use 'Favorites'</h3> */}
      <p>
        The favorites feature is located in the top left of your web browser.
        You can navigate to this screen and it will by default display five
        Twitter users on th left side of the screen. These five favorite users
        will also be displayed on the search results page as well. You can
        select any of these five Twitter users to display their most popular
        tweets.
      </p>
      <p>
        If you wish to add a user to the favorites, you need to search for the
        Twitter user in the 'search' input field in the top left of the screen.
        Upon recieving the results of your favorite user, simply click the "Add
        User to Favorites" button displayed beside the corresponding Tweet. You
        will see this user added to the left side of the screen.
      </p>
    </div>
  );
};
export default HowToFavorites;
