import threeFinger from "../pictures/threeFinger.jpg";

const AboutInfo = () => {
  return (
    <div className="clearfix">
      <img
        src={threeFinger}
        className="col-md-4 float-md-end mb-3 ms-md-3"
        alt="Depicted Search Input"
      />
      <p>
        MockingJay allows users to search for tweets and Twitter users, see a
        Twitter user's timeline, add/remove a Twitter user to a "Favorites
        List", and display a random tweet from the "Favorites List". MockingJay
        has only obtained a 'read-only' developer account with Twitter, so no
        information can be passed/posted/sent to Twitter, only retrieved.
      </p>
      <p>
        The search input currently only supports searching by user name and
        tweet content; you can see more information by selecting 'How To Use
        Search' below. The favorites page displays your "Favorites List", which
        is defaultly five Twitter users but you can customize these users; to
        learn more about the favorites page, navigate to 'How to Use Favorites
        below'.
      </p>
      <p>
        MockingJay is a web application built with React JS and Bootstrap. It
        utilizes a client-side server built with Express JS. The client-side API
        retrieves data from the Twitter API, restructures the data and returns
        it to the browser for display; this is accomplished with the axios
        library.
      </p>
    </div>
  );
};
export default AboutInfo;
