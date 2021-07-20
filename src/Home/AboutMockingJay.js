import threeFinger from "../pictures/threeFinger.jpg";

const AboutMockingJay = () => {
  return (
    <div className="clearfix">
      <img
        src={threeFinger}
        className="col-md-4 float-md-end mb-3 ms-md-3"
        alt="Depicted Search Input"
      />
      <p>
        MockingJay allows users to search for Twitter users and see their latest
        and most popular tweets. MockingJay has only obtained a 'read-only'
        developer account with Twitter, so no information can be
        passed/posted/sent to Twitter, only retrieved.
      </p>
      <p>
        MockingJay contains two methods of seeing Tweets from Twitter users:
        searching by name and using the favorites page. The search input
        currently only supports searching by user name, you can see more
        information by selecting 'How To Use Search' below. The favorites page
        displays five default Twitter users I have selecte but you can customize
        these users; to learn more about the favorites page, navigate to 'How to
        Use Favorites below'.
      </p>
      <p>
        MockingJay is a web application built with React JS. It utilizes a
        client-side server built with Express JS. The client-side API retrieves
        data from the Twitter API and returns it to the browser; this is
        accomplished with the axios library.
      </p>
    </div>
  );
};
export default AboutMockingJay;
