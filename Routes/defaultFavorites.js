const { default: axios } = require("axios");
const getToken = require("../Utilities/GetToken");

const defaultFavorites = async (req, res) => {
  const token = await getToken();

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
};

module.exports = defaultFavorites;
