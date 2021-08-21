const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");
const formatDateTime = require("../Utilities/formatDateTime");
const getToken = require("../Utilities/GetToken");

router.get("/:searchedText", async (req, res) => {
  const searchedText = req.params.searchedText;
  const token = await getToken();
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
          tweetsArray[i].created_at = formatDateTime(tweetsArray[i].created_at);

          tweetsWithUserInfo[i] = {
            ...includesObject.users[i],
            ...tweetsArray[i],
          };

          if (tweetsWithUserInfo[i].hasOwnProperty("profile_image_url")) {
            tweetsWithUserInfo[i].profile_image_url = tweetsWithUserInfo[
              i
            ].profile_image_url.replace("_normal", "");
          }

          //The below block of code was originally written to implement
          //video and animated GIFs; Twitter API V2 does not currently provide the URL
          //for videos or Animated GIFs
          if (
            tweetsWithUserInfo[i].hasOwnProperty("attachments") &&
            tweetsWithUserInfo[i].attachments.hasOwnProperty("media_keys")
          ) {
            tweetsWithUserInfo[i].attachments.media = {
              photos: [],
              videos: [],
              animatedGIF: [],
              poll_ids: [],
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
                case "poll_ids":
                  tweetsWithUserInfo[i].attachments.media.poll_ids.push(
                    mediaArray[index]
                  );
                default:
                  delete tweetsWithUserInfo[i].attachments.media;
              }
            });
          }
        }
        res.send(tweetsWithUserInfo);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
