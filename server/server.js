const { default: axios } = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const token =
  "AAAAAAAAAAAAAAAAAAAAAChVRgEAAAAAyXZ3VakgE7I5ycTefsVpoyGFug0%3DGfgQoVK9GyXe84B8CegSA0sCQ7XNTK6WlCfVsYiChiLYC3Tpc0";

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function formatDateTimeGroup(dtg) {
  let a = dtg.split(/[-t:.]/gi);
  return new Date(Date.UTC(a[0], --a[1], a[2], a[3], a[4], a[5]));
}

app.get("/api/getUser/:username", (req, res) => {
  const user = req.params.username;
  axios
    .get(
      `https://api.twitter.com/2/users/by/username/${user}?user.fields=location,profile_image_url,public_metrics`,
      { headers: { authorization: `Bearer ${token}` } }
    )
    .then((response) => {
      const user = response.data.data;
      user.author_id = user.id;
      user.profile_image_url = user.profile_image_url.replace("_normal", "");
      response.status !== 404 ? res.send(user) : res.send({ status: 404 });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/api/getUserTweets/:userID", (req, res) => {
  const id = req.params.userID;
  axios
    .get(
      `https://api.twitter.com/2/users/${id}/tweets?max_results=30&expansions=author_id,attachments.media_keys&tweet.fields=author_id,created_at,public_metrics,entities&user.fields=profile_image_url,username,url&media.fields=media_key,type,width,public_metrics,url`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      const numberOfTweets = response.data.meta.result_count;

      if (numberOfTweets === 0) res.send({ status: 404 });
      else {
        const includesObject = response.data.includes;
        const tweetsArray = response.data.data;
        let tweetsWithUserInfo = [];

        for (let i = 0; i < tweetsArray.length; i++) {
          const timestamp = formatDateTimeGroup(tweetsArray[i].created_at);
          tweetsArray[i].created_at = timestamp.toUTCString();

          tweetsWithUserInfo[i] = {
            ...includesObject.users[0],
            ...tweetsArray[i],
          };

          tweetsWithUserInfo[i].profile_image_url = tweetsWithUserInfo[
            i
          ].profile_image_url.replace("_normal", "");

          if (tweetsWithUserInfo[i].hasOwnProperty("attachments")) {
            tweetsWithUserInfo[i].attachments.media = {
              photos: [],
              videos: [],
              animatedGIF: [],
            };
            const mediaArray = includesObject.media;
            const mediaKeysArray = tweetsWithUserInfo[i].attachments.media_keys;

            mediaKeysArray.forEach((mediaKey) => {
              const index = mediaArray.findIndex((media) => {
                if (mediaKey === media.media_key) return true;
              });
              switch (mediaArray[index].type) {
                case "photo":
                  tweetsWithUserInfo[i].attachments.media.photos.push(
                    mediaArray[index]
                  );
                  break;
                case "video":
                  tweetsWithUserInfo[i].attachments.media.videos.push(
                    mediaArray[index]
                  );
                  break;
                case "animated_gif":
                  tweetsWithUserInfo[i].attachments.media.animatedGIF.push(
                    mediaArray[index]
                  );
              }

              console.log(tweetsWithUserInfo[i].attachments.media);
            });
          }
        }
        res.send(tweetsWithUserInfo);
      }
    })
    .catch((error) => {
      res.send({ status: 404 });
      console.log(error);
    });
});

app.get("/api/getTweets/:searchedText", (req, res) => {
  const searchedText = req.params.searchedText;
  axios
    .get(
      `https://api.twitter.com/2/tweets/search/recent?query=${searchedText}&max_results=30&tweet.fields=attachments,author_id,created_at,public_metrics,entities&expansions=author_id,attachments.media_keys&media.fields=media_key,preview_image_url,url&user.fields=description,id,location,name,profile_image_url,username`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      const numberOfTweets = response.data.meta.result_count;

      if (numberOfTweets === 0) res.send({ status: 404 });
      else {
        const includesObject = response.data.includes;
        const tweetsArray = response.data.data;
        let tweetsWithUserInfo = [];

        for (let i = 0; i < tweetsArray.length; i++) {
          const timestamp = formatDateTimeGroup(tweetsArray[i].created_at);
          tweetsArray[i].created_at = timestamp.toUTCString();

          tweetsWithUserInfo[i] = {
            ...includesObject.users[0],
            ...tweetsArray[i],
          };

          tweetsWithUserInfo[i].profile_image_url = tweetsWithUserInfo[
            i
          ].profile_image_url.replace("_normal", "");

          if (tweetsWithUserInfo[i].hasOwnProperty("attachments")) {
            tweetsWithUserInfo[i].attachments.media = {
              photos: [],
              videos: [],
              animatedGIF: [],
            };
            const mediaArray = includesObject.media;
            const mediaKeysArray = tweetsWithUserInfo[i].attachments.media_keys;

            mediaKeysArray.forEach((mediaKey) => {
              const index = mediaArray.findIndex((media) => {
                if (mediaKey === media.media_key) return true;
              });
              switch (mediaArray[index].type) {
                case "photo":
                  tweetsWithUserInfo[i].attachments.media.photos.push(
                    mediaArray[index]
                  );
                  break;
                case "video":
                  tweetsWithUserInfo[i].attachments.media.videos.push(
                    mediaArray[index]
                  );
                  break;
                case "animated_gif":
                  tweetsWithUserInfo[i].attachments.media.animatedGIF.push(
                    mediaArray[index]
                  );
              }

              console.log(tweetsWithUserInfo[i].attachments.media);
            });
          }
        }
        res.send(tweetsWithUserInfo);
      }
    })
    // const numberOfTweets = response.data.meta.result_count;

    // if (numberOfTweets === 0) res.send({ status: 404 });
    // else {
    //   const includesObject = response.data.includes;
    //   const tweetsArray = response.data.data;
    //   let tweetsWithUserInfo = [];

    //   for (let i = 0; i < tweetsArray.length; i++) {
    //     tweetsWithUserInfo[i] = {
    //       ...includesObject.users[i],
    //       ...tweetsArray[i],
    //     };

    //     if (tweetsWithUserInfo[i].hasOwnProperty("profile_image_url")) {
    //       tweetsWithUserInfo[i].profile_image_url = tweetsWithUserInfo[
    //         i
    //       ].profile_image_url.replace("_normal", "");
    //     }

    //     const timestamp = formatDateTimeGroup(
    //       tweetsWithUserInfo[i].created_at
    //     );
    //     tweetsWithUserInfo[i].created_at = timestamp.toUTCString();

    //     if (tweetsWithUserInfo[i].hasOwnProperty("attachments")) {
    //       const mediaArray = includesObject.media;
    //       const index = mediaArray.findIndex((media) => {
    //         tweetsWithUserInfo[i].attachments.media_key === media.media_key;
    //       });
    //       tweetsWithUserInfo[i].media = media[index];
    //     }
    //   }
    //   res.send(tweetsWithUserInfo);
    //   }
    // })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/api/defaultFavoriteUsers", (req, res) => {
  axios
    .get(
      "https://api.twitter.com/2/users/by?usernames=spacex,virpilcontrols,eagledynamics,niglobal,ufc&user.fields=location,profile_image_url,public_metrics",
      {
        headers: { authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      const favorites = response.data.data;
      for (let i = 0; i < favorites.length; i++) {
        favorites[i].author_id = favorites[i].id;
        favorites[i].profile_image_url = favorites[i].profile_image_url.replace(
          "_normal",
          ""
        );
      }
      res.send(response.data.data);
    });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
