import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import SearchResults from "./SearchResults";
import axios from "axios";

const App = () => {
  const [searchedText, setSearchedText] = useState("");
  const [userReturned, setUserReturned] = useState(null);
  const [tweetsReturned, setTweetsReturned] = useState(null);
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  const testTweets = [
    {
      username: "VIRPILControls",
      url: "https://t.co/YGjAgvOZ19",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      id: "1415615407013179396",
      name: "VIRPIL Controls",
      text: "RT @Kraiklyn1: Alright, after carefully managing cables and installing firmware piece by piece we now have  the SimPit set up. Now to calib…",
      created_at: ["2021-07-15", "10:13:08.000Z"],
      author_id: "815156080116428800",
      public_metrics: {
        retweet_count: 7,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
    },
    {
      username: "VIRPILControls",
      url: "https://t.co/YGjAgvOZ19",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      id: "1415538476775354368",
      name: "VIRPIL Controls",
      text: "RT @Kraiklyn1: Calibrated to a T.  - Now to jury rig them to work with #StarCitizen - I am currently digging through what is the best softw…",
      created_at: ["2021-07-15", "05:07:26.000Z"],
      author_id: "815156080116428800",
      public_metrics: {
        retweet_count: 3,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
    },
    {
      username: "VIRPILControls",
      url: "https://t.co/YGjAgvOZ19",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      id: "1414954539766136847",
      name: "VIRPIL Controls",
      text: "RT @imjabbers: Honestly I cannot recommend this box enough, love the one I bought! https://t.co/sZaIVmyFHV",
      created_at: ["2021-07-13", "14:27:05.000Z"],
      author_id: "815156080116428800",
      public_metrics: {
        retweet_count: 2,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
    },
    {
      username: "VIRPILControls",
      url: "https://t.co/YGjAgvOZ19",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      id: "1414658573683068939",
      name: "VIRPIL Controls",
      text: "RT @Kraiklyn1: #StarCitizen @VIRPILControls - This Thruster is top grade. Just waiting for the sticks to arrive on Friday and we will be ch…",
      created_at: ["2021-07-12", "18:51:01.000Z"],
      author_id: "815156080116428800",
      public_metrics: {
        retweet_count: 3,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
    },
    {
      username: "VIRPILControls",
      url: "https://t.co/YGjAgvOZ19",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      id: "1414656965414895617",
      name: "VIRPIL Controls",
      text:
        "@cmd_Terada 2/2 \n" +
        "\n" +
        "Please contact our support team and let me know your ticket ID and we'll get this sorted for you ASAP I promise!",
      created_at: ["2021-07-12", "18:44:38.000Z"],
      author_id: "815156080116428800",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 6,
        quote_count: 0,
      },
    },
    {
      username: "VIRPILControls",
      url: "https://t.co/YGjAgvOZ19",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      id: "1414656891796480003",
      name: "VIRPIL Controls",
      text:
        "@cmd_Terada 1/2\n" +
        "\n" +
        "Hi @cmd_Terada ! This absolutely isn't expected at all - there are thousands and thousands of ALPHA grips in pilot's hands all around the world and this really isn't something we come across often! I'm so sorry about this!",
      created_at: ["2021-07-12", "18:44:20.000Z"],
      author_id: "815156080116428800",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 5,
        quote_count: 0,
      },
    },
    {
      username: "VIRPILControls",
      url: "https://t.co/YGjAgvOZ19",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      id: "1414582469790216192",
      name: "VIRPIL Controls",
      text:
        "The VPC Control Panel #2 will now include an optional shorter gear lever to suit a wider range of cockpit setups.\n" +
        "\n" +
        "Existing Control Panel #2 owners can request this part free of charge in a future order, or for the cost of shipping!\n" +
        "\n" +
        "https://t.co/P71AajUWYh https://t.co/YdsznxQ3Te",
      created_at: ["2021-07-12", "13:48:37.000Z"],
      author_id: "815156080116428800",
      public_metrics: {
        retweet_count: 5,
        reply_count: 3,
        like_count: 45,
        quote_count: 1,
      },
      attachments: { media_keys: [Array] },
    },
    {
      username: "VIRPILControls",
      url: "https://t.co/YGjAgvOZ19",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      id: "1414535313079296002",
      name: "VIRPIL Controls",
      text:
        "RT @aag_th: 🕹️Product #Review: #VIRPIL ACE Collection Flight Rudder Pedals by @GrimReapers_ \n" +
        "https://t.co/acxfD9JDqJ\n" +
        "@VIRPILControls #Fligh…",
      created_at: ["2021-07-12", "10:41:14.000Z"],
      author_id: "815156080116428800",
      public_metrics: {
        retweet_count: 1,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
    },
    {
      username: "VIRPILControls",
      url: "https://t.co/YGjAgvOZ19",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      id: "1414501704607932419",
      name: "VIRPIL Controls",
      text: "@the_chodie Hi @the_chodie - I'm very sorry to see this! Please create a support ticket and our team will get this resolved for you ASAP!",
      created_at: ["2021-07-12", "08:27:41.000Z"],
      author_id: "815156080116428800",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 2,
        quote_count: 0,
      },
    },
    {
      username: "VIRPILControls",
      url: "https://t.co/YGjAgvOZ19",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      id: "1412409793378201605",
      name: "VIRPIL Controls",
      text: "For extra adjustment on the VPC Control Panel #2, is a short gear lever arm something you would like for your setup? https://t.co/TGZl16bW41",
      created_at: ["2021-07-06", "13:55:10.000Z"],
      author_id: "815156080116428800",
      public_metrics: {
        retweet_count: 5,
        reply_count: 8,
        like_count: 65,
        quote_count: 0,
      },
      //   attachments: { media_keys: [Array] }
    },
  ];

  const testFavorites = [
    {
      username: "SpaceX",
      location: "Hawthorne, CA",
      public_metrics: {
        followers_count: 17497683,
        following_count: 100,
        tweet_count: 5353,
        listed_count: 31946,
      },
      id: "34743251",
      name: "SpaceX",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_normal.jpg",
      author_id: "34743251",
    },
    {
      username: "VIRPILControls",
      location: "Belarus",
      public_metrics: {
        followers_count: 4127,
        following_count: 30,
        tweet_count: 509,
        listed_count: 17,
      },
      id: "815156080116428800",
      name: "VIRPIL Controls",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
      author_id: "815156080116428800",
    },
    {
      username: "eagledynamics",
      public_metrics: {
        followers_count: 12654,
        following_count: 19,
        tweet_count: 812,
        listed_count: 103,
      },
      id: "108614450",
      name: "Eagle Dynamics",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ_normal.jpg",
      author_id: "108614450",
    },
    {
      username: "NIglobal",
      location: "Austin, TX",
      public_metrics: {
        followers_count: 27152,
        following_count: 2948,
        tweet_count: 8330,
        listed_count: 545,
      },
      id: "44682474",
      name: "NI (National Instruments)",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1272870939517165569/ArOkskTP_normal.jpg",
      author_id: "44682474",
    },
    {
      username: "ufc",
      location: "Worldwide",
      public_metrics: {
        followers_count: 8662928,
        following_count: 638,
        tweet_count: 114472,
        listed_count: 14250,
      },
      id: "6446742",
      name: "UFC",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u_normal.jpg",
      author_id: "6446742",
    },
  ];

  const testUser = {
    username: "VIRPILControls",
    location: "Belarus",
    public_metrics: {
      followers_count: 4127,
      following_count: 30,
      tweet_count: 509,
      listed_count: 17,
    },
    id: "815156080116428800",
    name: "VIRPIL Controls",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu_normal.jpg",
    author_id: "815156080116428800",
  };

  useEffect(() => {
    // axios.get("/api/defaultFavoriteUsers").then((response) => {
    //   setFavoriteUsers(response.data);
    //   console.log(response.data);
    // });
    setTweetsReturned(testTweets);
    setFavoriteUsers(testFavorites);
    setUserReturned(testUser);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`/api/getUser/${searchedText}`).then((response) => {
      console.log(response.data);
      response.status !== 404
        ? setUserReturned(response.data)
        : setUserReturned([]);
    });

    axios.get(`/api/getTweets/${searchedText}`).then((response) => {
      console.log(response.data);
      response.data.status === 404
        ? setTweetsReturned([])
        : setTweetsReturned(response.data);
    });
  };

  const showUserAndTweets = (user) => {
    getUserTweets(user.author_id);
    setUserReturned(user);
  };

  const getUserTweets = (userID) => {
    console.log(userID);
    axios.get(`/api/getUserTweets/${userID}`).then((response) => {
      response.data.status === 404
        ? setTweetsReturned([])
        : setTweetsReturned(response.data);

      console.log(response.data);
    });
  };

  const removeFavorite = (deleteUser) => {
    const newFavoriteUsers = favoriteUsers.filter(
      (user) => user.username !== deleteUser
    );
    setFavoriteUsers(newFavoriteUsers);
  };

  const addFavorite = (newFavorite) => {
    favoriteUsers.length
      ? setFavoriteUsers((usersArray) => [...usersArray, newFavorite])
      : setFavoriteUsers([newFavorite]);
  };

  return (
    <div className="App">
      <Navbar />
      <div
        id="banner"
        className="border-top border-bottom border-2 border-info"
      ></div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/Home/HowToSearch" render={() => <Home />} />
        <Route exact path="/Home/HowToFavorites" render={() => <Home />} />
        <Route
          exact
          path="/SearchResults"
          render={() => (
            <SearchResults
              userReturned={userReturned}
              tweetsReturned={tweetsReturned}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favoriteUsers={favoriteUsers}
              getUserTweets={getUserTweets}
              showUserAndTweets={showUserAndTweets}
              searchedText={searchedText}
              setSearchedText={setSearchedText}
              handleSubmit={handleSubmit}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
