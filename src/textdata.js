const testTweets = [
  {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    id: "1417128782306103299",
    name: "Eagle Dynamics",
    url: "https://t.co/37wThEzpI1",
    username: "eagledynamics",
    author_id: "108614450",
    public_metrics: {
      retweet_count: 0,
      reply_count: 1,
      like_count: 1,
      quote_count: 0,
    },
    text: "@the_grandad Hi, yes it is something we are considering for other missions. Thanks - Scott / bignewy",
    created_at: ["2021-07-19", "14:26:45.000Z"],
  },
  {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    id: "1417128557357248514",
    name: "Eagle Dynamics",
    url: "https://t.co/37wThEzpI1",
    username: "eagledynamics",
    author_id: "108614450",
    public_metrics: {
      retweet_count: 0,
      reply_count: 0,
      like_count: 1,
      quote_count: 0,
    },
    text: "@StreetTripleMat Hi, I can not say I have noticed a problem in VR, I will watch for it in my sessions. Thanks - Scott / bignewy",
    created_at: ["2021-07-19", "14:25:51.000Z"],
  },
  {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    id: "1417036416631062529",
    name: "Eagle Dynamics",
    url: "https://t.co/37wThEzpI1",
    username: "eagledynamics",
    attachments: { media_keys: [Array] },
    author_id: "108614450",
    public_metrics: {
      retweet_count: 10,
      reply_count: 3,
      like_count: 72,
      quote_count: 1,
    },
    text: 'Did you catch our Sunday Supplement? We have a guide showing how to use the "Fly with a friend" WWII missions, this concept is centred around one mission that can be flown in either a single or multiplayer environment. https://t.co/vm5udCylON https://t.co/exQ747NSOy',
    created_at: ["2021-07-19", "08:19:43.000Z"],
  },
  {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    id: "1416339268813869059",
    name: "Eagle Dynamics",
    url: "https://t.co/37wThEzpI1",
    username: "eagledynamics",
    attachments: { media_keys: [Array] },
    author_id: "108614450",
    public_metrics: {
      retweet_count: 9,
      reply_count: 1,
      like_count: 89,
      quote_count: 1,
    },
    text: "Eagle Dynamics are honoured to be supporting such a fantastic event, we hope you all enjoy the Virtual Air Tattoo! #virtualairtattoo https://t.co/F6dwNRn2TV https://t.co/DvdPd2QeuH",
    created_at: ["2021-07-17", "10:09:30.000Z"],
  },
  {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    id: "1416324231923707909",
    name: "Eagle Dynamics",
    url: "https://t.co/37wThEzpI1",
    username: "eagledynamics",
    attachments: { media_keys: [Array] },
    author_id: "108614450",
    public_metrics: {
      retweet_count: 6,
      reply_count: 0,
      like_count: 36,
      quote_count: 0,
    },
    text:
      "Virtual Air Tattoo 2021 is live now for 6 hours!\n" +
      "We wish the display teams all the best during their displays today.\n" +
      "\n" +
      "Stream can be found here https://t.co/F6dwNRn2TV https://t.co/lZoPDqkfQ6",
    created_at: ["2021-07-17", "09:09:45.000Z"],
  },
  {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    id: "1416119549355831298",
    name: "Eagle Dynamics",
    url: "https://t.co/37wThEzpI1",
    username: "eagledynamics",
    author_id: "108614450",
    public_metrics: {
      retweet_count: 0,
      reply_count: 0,
      like_count: 1,
      quote_count: 0,
    },
    text: "@chillcommand Damage model will be improved. Thanks - Scott / bignewy",
    created_at: ["2021-07-16", "19:36:25.000Z"],
  },
  {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    id: "1416119299857584129",
    name: "Eagle Dynamics",
    url: "https://t.co/37wThEzpI1",
    username: "eagledynamics",
    author_id: "108614450",
    public_metrics: {
      retweet_count: 0,
      reply_count: 1,
      like_count: 2,
      quote_count: 0,
    },
    text: "@benniegentil Its in our plans. :) Thanks - Scott / bignewy",
    created_at: ["2021-07-16", "19:35:25.000Z"],
  },
  {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    id: "1416051244704190465",
    name: "Eagle Dynamics",
    url: "https://t.co/37wThEzpI1",
    username: "eagledynamics",
    attachments: { media_keys: [Array] },
    author_id: "108614450",
    public_metrics: {
      retweet_count: 11,
      reply_count: 0,
      like_count: 40,
      quote_count: 0,
    },
    text:
      "This Saturday, 17th of July, tune in for a feast of flying fun with The Virtual Air Tattoo Airshow by The Royal Air Force Charitable Trust Enterprises. Six hours of FREE action will stream live on social media. \n" +
      "@airtattoo @rafcharitable @BAESystemsAir \n" +
      "\n" +
      "https://t.co/F6dwNRn2TV https://t.co/0mm4T3CvHK",
    created_at: ["2021-07-16", "15:05:00.000Z"],
  },
  {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    id: "1416049994038222855",
    name: "Eagle Dynamics",
    url: "https://t.co/37wThEzpI1",
    username: "eagledynamics",
    attachments: { media_keys: [Array] },
    author_id: "108614450",
    public_metrics: {
      retweet_count: 4,
      reply_count: 2,
      like_count: 51,
      quote_count: 0,
    },
    text: "DCS: Normandy is receiving enhancements to airfields, buildings, forests and fields. Frame-rate improvements and the Level of Detail (LOD) for objects has also been optimised. We are planning for these updates to be included in the next Open Beta. https://t.co/6vwqp09g9P https://t.co/NztOoqsbqH",
    created_at: ["2021-07-16", "15:00:02.000Z"],
  },
  {
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    id: "1416049991286616070",
    name: "Eagle Dynamics",
    url: "https://t.co/37wThEzpI1",
    username: "eagledynamics",
    attachments: { media_keys: [Array] },
    author_id: "108614450",
    public_metrics: {
      retweet_count: 7,
      reply_count: 7,
      like_count: 105,
      quote_count: 2,
    },
    text: "Progress on DCS: Ka-50 Black Shark 3 is exciting with fine detail 3D design work on the Klimov TV3-117VMA turboshaft engines, gearbox and rotor system nearing completion. Check out the In Development screenshots, we hope you will be impressed. https://t.co/6vwqoZRELf https://t.co/l0vzvMJsPJ",
    created_at: ["2021-07-16", "15:00:01.000Z"],
  },

  //   attachments: { media_keys: [Array] }
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
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
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
      "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu.jpg",
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
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
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
      "https://pbs.twimg.com/profile_images/1272870939517165569/ArOkskTP.jpg",
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
      "https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg",
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
    "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu.jpg",
  author_id: "815156080116428800",
};
