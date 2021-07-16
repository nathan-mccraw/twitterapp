const { default: axios } = require("axios");
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const token =
  "AAAAAAAAAAAAAAAAAAAAAChVRgEAAAAAyXZ3VakgE7I5ycTefsVpoyGFug0%3DGfgQoVK9GyXe84B8CegSA0sCQ7XNTK6WlCfVsYiChiLYC3Tpc0";

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/api/defaultFavoriteUsers", (req, res) => {
  res.send(favoriteUsers);
});

app.get("/api/getUser/:username", (req, res) => {
  const user = req.params.username;
  axios
    .get(
      `https://api.twitter.com/2/users/by/username/${user}?user.fields=profile_image_url`,
      { headers: { authorization: `Bearer ${token}` } }
    )
    .then((response) => {
      res.send(response.data);
    });
});

app.get("/api/getUserTweets/:userID", (req, res) => {
  const id = req.params.userID;
  console.log(`https://api.twitter.com/2/users/${id}/tweets?max_results=5`);
  axios
    .get(`https://api.twitter.com/2/users/${id}/tweets?max_results=5`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((response) => {
      res.send(response.data);
    });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

const favoriteUsers = [
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
