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
      name: "アジッケーノ＝リコス",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1319892415193333760/8IqsL7FM_normal.jpg",
      username: "ajitsukenorikos",
      id: "1416247773897248768",
      description:
        "コロナ禍からメディア報道に不信感を抱き、半年間で3000本のyoutube動画を視聴。\n" +
        "この現実に驚愕→落胆→覚醒→奮起。美しい日本を次の世代に継承させたく、ひとり草の根活動を始めました。Twitter初心者。真実を求め、日々、皆様から学ばせて頂き感謝しております。",
      text: "RT @JunKuma8: @kouen551 @ajitsukenorikos 例えば地震当たり前の🇯🇵、東北で皆さん並んで配給待っている姿、🇯🇵じゃ普通ですが世界中が驚愕したおりこうちゃんぶり。私もNYCで世界中の人たちから延々と褒められました。「ワイの国なら暴動、殺人、レ…",
      author_id: "1283032562454208514",
      created_at: "2021-07-17T04:05:56.000Z",
    },
    {
      name: "Elisabeth G",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1375118577750183942/eH827_zm_normal.jpg",
      username: "SuisseFlughafen",
      id: "1416247772240617475",
      description: "",
      text:
        "RT @Breaking911: SHOCK VIDEO: Mother Thwarts Brazen NYC Kidnapping Attempt Yesterday In Queens; Police Searching For 2 Suspects \n" +
        "\n" +
        "https://t…",
      author_id: "188160180",
      created_at: "2021-07-17T04:05:56.000Z",
    },
    {
      name: "The Goobies",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1415534038673199107/j0HC5DIx_normal.jpg",
      username: "TheGoobiesComic",
      id: "1416247756616867841",
      description:
        "A comic strip about the adventure of life with dogs! Publishes every Tuesday, Thursday, & Sunday on Webtoon.",
      text:
        "RT @MarkLevineNYC: Too few NYers know:\n" +
        "\n" +
        "==&gt; In-home vaccination is now available in NYC to *everyone* aged 12+.\n" +
        "\n" +
        "You can select any of the…",
      author_id: "1415533595750506496",
      created_at: "2021-07-17T04:05:52.000Z",
    },
    {
      name: "Jess",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1356112654516047878/H9PZTXuR_normal.jpg",
      username: "mochiiiibaby",
      id: "1416247747422953475",
      description: "ayo! no pendejas here. 💯🇺🇸🇰🇭🇵🇷 your joy isn’t tied to me.",
      location: "Philly",
      text:
        "RT @Breaking911: SHOCK VIDEO: Mother Thwarts Brazen NYC Kidnapping Attempt Yesterday In Queens; Police Searching For 2 Suspects \n" +
        "\n" +
        "https://t…",
      author_id: "214586676",
      created_at: "2021-07-17T04:05:50.000Z",
    },
    {
      name: "danielpiedras",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/462051402454671360/ahJOiJFX_normal.jpeg",
      username: "piedradmatera",
      id: "1416247743023026180",
      description:
        "The experience of the use of reason arose from the method.  And before reason, what was it?  And before time and space? hermano Pedro Jesús de misiones 🇦🇷🌎",
      location: "Sur Americano",
      text:
        "RT @michaeljohns: We cannot have a great America without great cities, and that starts with our largest. \n" +
        "\n" +
        "@RudyGiuliani's mayorship ('94 t…",
      author_id: "2458513943",
      created_at: "2021-07-17T04:05:49.000Z",
    },
    {
      name: "Peter Pan",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1413480049567731715/kVmE_7l5_normal.jpg",
      username: "titocole22",
      id: "1416247742498811911",
      description: "june 8, 2024",
      location: "Nirvana",
      text: "I love that ppl from nyc dont care about you crying in public",
      author_id: "1188355738869125121",
      created_at: "2021-07-17T04:05:49.000Z",
    },
    {
      name: "BK Is My Homegirl",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/3738864848/5b52c5e994e78027f2df65b19a61c977_normal.jpeg",
      username: "iluvmysunnies",
      id: "1416247737545334784",
      description: "",
      text: "RT @lanegraelimiera: Just casually flexing in NYC https://t.co/TlbPBVWWe1",
      author_id: "706423058",
      created_at: "2021-07-17T04:05:47.000Z",
    },
    {
      name: "😮‍💨",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1414389101877469189/E_aJnKvp_normal.jpg",
      username: "drainimpala",
      id: "1416247725218312200",
      description: "wass6p @charli_xcx: bladee & charli 4ever 💎",
      location: "she/her",
      text: "buying concerts tickets without looking has already fucked me up…. bought tickets for yves tumor second nyc show and it’s the same night as coco and clair clair definitely going to coco and clair clair so now i gotta sell the yves tumor one 😁",
      author_id: "1434112388",
      created_at: "2021-07-17T04:05:44.000Z",
    },
    {
      name: "Janice McMaster",
      profile_image_url:
        "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
      username: "janice_mcmaster",
      id: "1416247722647109633",
      description: "",
      location: "Canada",
      text: "RT @KeithOlbermann: NYC MISSING DOG ALERT: Xena is lost in Brooklyn, last seen at 8th and Roebling. If you’ve found or seen her please go h…",
      author_id: "1614011707",
      created_at: "2021-07-17T04:05:44.000Z",
    },
    {
      name: "ro (was god7ruiqi)",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1415321991112843272/mmRBEB6M_normal.jpg",
      username: "meixuis",
      id: "1416247713566400513",
      description: "刘人语 + girls planet 999",
      location: "she/her",
      text: "@anjangchoijo she's from nyc!",
      author_id: "1247782246859202560",
      created_at: "2021-07-17T04:05:42.000Z",
    },
  ];

  const testFavorites = [
    {
      username: "elonmusk",
      name: "Elon Musk",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1404334078388670466/DgO3WL4S_normal.jpg",
      id: "44196397",
    },
    {
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1314309247908356103/W6qDiKYV_normal.jpg",
      id: "803880",
      name: "Tony Stark (Fan account)",
      username: "tonystark",
    },
    {
      username: "ufc",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u_normal.jpg",
      id: "6446742",
      name: "UFC",
    },
  ];
  useEffect(() => {
    // axios.get("/api/defaultFavoriteUsers").then((response) => {
    //   setFavoriteUsers(response.data);
    // });
    setTweetsReturned(testTweets);
    setFavoriteUsers(testFavorites);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`/api/getUser/${searchedText}`).then((response) => {
      response.status !== 404
        ? setUserReturned(response.data)
        : setUserReturned(null);
    });

    axios.get(`/api/getTweets/${searchedText}`).then((response) => {
      console.log(response.data);
      response.data.status === 404
        ? setTweetsReturned(null)
        : setTweetsReturned(response.data);
    });
  };

  const getUserTweets = (user) => {
    axios.get(`/api/getUserTweets/${user.id}`).then(({ data }) => {
      const tweets = data.data;
      const tweetsData = tweets.map((tweet) => {
        tweet.username = user.username;
        tweet.profile_image_url = user.profile_image_url;
        return tweet;
      });
      setTweetsReturned(tweetsData);
      console.log(tweetsData);
    });
  };

  const removeFavorite = (deleteUser) => {
    const newFavoriteUsers = favoriteUsers.filter(
      (user) => user.username !== deleteUser
    );
    setFavoriteUsers(newFavoriteUsers);
  };

  const addFavorite = () => {
    const newFavorite = userReturned.data;
    favoriteUsers.length
      ? setFavoriteUsers((usersArray) => [...usersArray, newFavorite])
      : setFavoriteUsers([newFavorite]);
  };

  return (
    <div className="App">
      <Navbar
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        handleSubmit={handleSubmit}
      />
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
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
