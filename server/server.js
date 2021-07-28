const express = require("express");
const path = require("path");
const app = express();
const userNameRoute = require("./Routes/userNameRoute");
const userTimelineRoute = require("./Routes/userTimelineRoute");
const tweetContentRoute = require("./Routes/tweetContentRoute");
const defaultFavorites = require("./Routes/defaultFavorites");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);

app.use("/api/getUser", userNameRoute);
app.use("/api/getUserTweets", userTimelineRoute);
app.use("/api/getTweets", tweetContentRoute);
app.use("/api/defaultFavoriteUsers", defaultFavorites);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
