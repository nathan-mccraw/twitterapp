const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");
const getToken = require("../Utilities/GetToken");

router.get("/:username", async (req, res) => {
  const token = await getToken();
  const user = req.params.username;
  axios
    .get(
      `https://api.twitter.com/2/users/by/username/${user}?user.fields=location,profile_image_url,public_metrics`,
      { headers: { authorization: `Bearer ${token}` } }
    )
    .then((response) => {
      const user = response.data.data;
      user.author_id = user.id;
      if (user.hasOwnProperty("profile_image_url"))
        user.profile_image_url = user.profile_image_url.replace("_normal", "");

      response.status !== 404 ? res.send(user) : res.send({ status: 404 });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
