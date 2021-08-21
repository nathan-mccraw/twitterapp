const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");
const formatDateTime = require("../Utilities/formatDateTime");
const getToken = require("../Utilities/GetToken");

router.get("/:userID", async (req, res) => {
  const token = await getToken();
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
          tweetsArray[i].created_at = formatDateTime(tweetsArray[i].created_at);

          tweetsWithUserInfo[i] = {
            ...includesObject.users[0],
            ...tweetsArray[i],
          };

          if (tweetsWithUserInfo[i].hasOwnProperty("profile_image_url")) {
            tweetsWithUserInfo[i].profile_image_url = tweetsWithUserInfo[
              i
            ].profile_image_url.replace("_normal", "");
          }

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
                  break;
                default:
                  delete tweetsWithUserInfo[i].attachments.media;
              }
            });
          }
        }
        console.log(tweetsWithUserInfo);
        res.send(tweetsWithUserInfo);
      }
    })
    .catch((error) => {
      res.send({ status: 404 });
      console.log(error);
    });
});

module.exports = router;
