const Tweets = ({ tweetsReturned }) => {
  return (
    <div className="col-auto">
      <ul>
        {tweetsReturned.map((tweet) => (
          <li key={tweet.id}>
            <div className="row">
              <div className="col">
                <img
                  src={tweet.profile_image_url}
                  className="me-3"
                  alt="Profile"
                />
              </div>
              <div className="col">@{tweet.username}</div>
            </div>
            <div className="row">{tweet.text}</div>
            <div className="row">{tweet.created_at}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tweets;
