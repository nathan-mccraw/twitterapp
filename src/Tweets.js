const Tweets = ({ tweetsReturned }) => {
  if (tweetsReturned === null) {
    return null;
  }
  return (
    <div className="col-auto">
      <ul>
        {tweetsReturned.map((tweet) => (
          <li
            key={tweet.id}
            className="border border-2 border-info mb-0 p-3 pb-0"
          >
            <div className="row">
              <div className="col-auto">
                <img
                  src={tweet.profile_image_url}
                  className="border border-primary p-1  mb-3 rounded-circle shadow"
                  alt="Profile"
                />
              </div>
              <div className="col-auto h3 text-info ps-0">
                @{tweet.username}
              </div>
            </div>
            <div className="row">{tweet.text}</div>
            <div className="row mt-3">{tweet.created_at}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tweets;
