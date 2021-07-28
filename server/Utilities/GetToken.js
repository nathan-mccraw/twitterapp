const { default: axios } = require("axios");

const getToken = () => {
  const config = {
    headers: { Content_Type: "application/json" },
    auth: {
      username: process.env.API_KEY,
      password: process.env.API_SECRET_KEY,
    },
  };
  return axios
    .post(
      "https://api.twitter.com/oauth2/token",
      "grant_type=client_credentials",
      config
    )
    .then((response) => {
      return response.data.access_token;
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = getToken;
