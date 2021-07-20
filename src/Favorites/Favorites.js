import noReturnIMG from "../pictures/NoReturn.jpg";

const Favorites = ({ favoriteUsers }) => {
  console.log(favoriteUsers);
  if (favoriteUsers.length === 0 || !favoriteUsers)
    return (
      <div className="text-center">
        <img src={noReturnIMG} alt="disconnected" style={{ width: "600px" }} />
      </div>
    );

  return (
    <div className="container-fluid m-4">
      <div className="row me-4">
        {favoriteUsers.map((user) => (
          <div className="col-2 m-4 ps-0 pe-0 border border-info shadow rounded-3">
            <div className="row justify-content-center m-3 mb-0 ps-1 pe-1">
              <img
                src={user.profile_image_url}
                style={{ width: "250px" }}
                className="border shadow-sm p-1"
                alt="Profile"
              />
            </div>
            <div className="row justify-content-center text-info h5 mt-1 mb-0">
              @{user.username}
            </div>
            <div className="row justify-content-center">{user.name}</div>
            <div className="row justify-content-center">
              {user.location ? user.location : "Location Unknown"}
            </div>
            <div className="row mt-3 ms-1 me-1 justify-content-between">
              <div className="col-auto">
                <div className="row" style={{ fontSize: "small" }}>
                  Tweets
                </div>
                <div className="row">{user.public_metrics.tweet_count}</div>
              </div>
              <div className="col-auto">
                <div className="row" style={{ fontSize: "small" }}>
                  Followers
                </div>
                <div className="row">{user.public_metrics.followers_count}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    //     <div className="container offset-3">
    //       <div className="col-auto mb-4">
    //         <div className="row">
    //           <div className="col-auto border border-info border-2 rounded p-2 shadow">
    //             <div className="row p-2 mb-2 justify-content-between align-items-center">
    //               <div className="col-auto me-1">
    //                 <img
    //                   src={userReturned.profile_image_url}
    //                   className="border border-primary p-1 rounded-circle"
    //                   alt="Profile"
    //                 />{" "}
    //               </div>
    //               <div
    //                 className="col-auto h3 text-info getTweets"
    //                 onClick={() => getUserTweets(userReturned.author_id)}
    //               >
    //                 @{userReturned.username}
    //                 <sup>
    //                   <i className="bi bi-twitter text-info ms-2"></i>
    //                 </sup>
    //               </div>
    //               <div className="col-auto">
    //                 <button
    //                   onClick={() => {
    //                     addFavorite(userReturned);
    //                   }}
    //                   className="col ms-3 border-0 bg-body float-md-end"
    //                 >
    //                   <div className="row text-center">
    //                     <i
    //                       className="bi bi-person-plus-fill text-info"
    //                       style={styleIcon}
    //                     ></i>
    //                   </div>
    //                   <div className="row h6 text-center">Add Fav</div>
    //                 </button>
    //               </div>
    //             </div>
    //             <div className="row ps-2 justify-content-center">
    //               <div className="col-auto">{userReturned.name}</div>
    //               <div className="col-auto">
    //                 <i class="bi bi-dot"></i>
    //               </div>
    //               <div className="col-auto">
    //                 {userReturned.location
    //                   ? userReturned.location
    //                   : "Location Unknown"}
    //               </div>
    //               <div className="col-auto">
    //                 <i class="bi bi-dot"></i>
    //               </div>
    //               <div className="col-auto">
    //                 {userReturned.public_metrics.followers_count} Follows
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
  );
};

export default Favorites;
