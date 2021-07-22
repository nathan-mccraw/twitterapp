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


const data = [
{
  name: 'UFC',
  username: 'ufc',
  id: '1417635433593204736',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1417633272071299075' ] },
  created_at: 'Wed, 21 Jul 2021 00:00:00 GMT',
  text: 'Contenders vying to get back into the middleweight mix 👊\n' +
    '\n' +
    '@KillaGorillaMMA vs @KelvinGastelum \n' +
    '\n' +
    '[ #UFCVegas34 | August 21 ] https://t.co/yByyhUPDgi',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object], [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 291,
    reply_count: 68,
    like_count: 3912,
    quote_count: 72
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417616355558191106',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '13_1417615924706742272' ] },
  created_at: 'Tue, 20 Jul 2021 22:44:11 GMT',
  text: 'A lot to prove and a throne to reclaim 👑\n' +
    '\n' +
    '@TJDillashaw returns this weekend.\n' +
    '\n' +
    '[ #UFCVegas32 | Saturday LIVE on @ESPN &amp; @ESPNPlus ] https://t.co/1AnVWvVycr',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object], [Object], [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 206,
    reply_count: 49,
    like_count: 1699,
    quote_count: 36
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417546054417870848',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '13_1417531391928008706' ] },
  created_at: 'Tue, 20 Jul 2021 18:04:50 GMT',
  text: '𝙀 𝙓 𝙋 𝙇 𝙊 𝙎 𝙄 𝙑 𝙀 💥\n' +
    '\n' +
    '[ @CorySandhagen | #UFCVegas32 | LIVE on @ESPN &amp; @ESPNPlus ] https://t.co/lfjTBCACDo',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object], [Object], [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 652,
    reply_count: 85,
    like_count: 5107,
    quote_count: 116
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417543242149625858',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  created_at: 'Tue, 20 Jul 2021 17:53:40 GMT',
  text: 'RT @UFCNews: Preview the entire #UFCVegas32 card, fight by fight ⤵️:\n' +
    '\n' +
    'https://t.co/QsZsZJY6UX',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object] ]
  },
  author_id: '6446742',
  public_metrics: { retweet_count: 13, reply_count: 0, like_count: 0, quote_count: 0 }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417499789416026114',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1415822354559606784' ] },
  created_at: 'Tue, 20 Jul 2021 15:01:00 GMT',
  text: 'Dillashaw 𝑰𝑺 𝑩𝑨𝑪𝑲 💢\n' +
    '\n' +
    '@TJDillashaw makes his return to the Octagon SATURDAY. \n' +
    '\n' +
    '[ #UFCVegas32 | July 24 | LIVE on @ESPNPlus ] https://t.co/DpzEJkqykd',
  entities: {
    urls: [ [Object] ],
    annotations: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object], [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 255,
    reply_count: 107,
    like_count: 2771,
    quote_count: 40
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417469338949402632',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1415836577889087489' ] },
  created_at: 'Tue, 20 Jul 2021 13:00:00 GMT',
  text: 'Sending Happy Birthday vibes to @GilbertDurinho 🎉 https://t.co/djjfyDTZji',
  entities: { urls: [ [Object] ], mentions: [ [Object] ] },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 135,
    reply_count: 49,
    like_count: 3105,
    quote_count: 12
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417274806484021248',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '13_1417251406663225344' ] },
  created_at: 'Tue, 20 Jul 2021 00:07:00 GMT',
  text: 'A battle for the 𝙏𝙊𝙋  seed between 2 exciting bantamweights 🍿\n' +
    '\n' +
    '| #UFCVegas32 this S͟a͟t͟u͟r͟d͟a͟y͟ live on @ESPN &amp; #ESPNPlus | https://t.co/qy0JuWm1eF',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object], [Object] ],
    mentions: [ [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 160,
    reply_count: 63,
    like_count: 1386,
    quote_count: 47
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417258448954265603',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1415837855893524481' ] },
  created_at: 'Mon, 19 Jul 2021 23:02:00 GMT',
  text: 'Send some birthday love to these UFC athletes 🙌 https://t.co/LlZsu98HoX',
  entities: { urls: [ [Object] ], annotations: [ [Object] ] },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 42,
    reply_count: 30,
    like_count: 813,
    quote_count: 6
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417243097801519128',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '13_1417240441448108055' ] },
  created_at: 'Mon, 19 Jul 2021 22:01:00 GMT',
  text: '"We got a real prospect on our hands here" 💯\n' +
    '\n' +
    '| @YanezMMA | #UFCVegas32 this Saturday on @ESPN &amp; @ESPN+ | https://t.co/ZZPES39e7U',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object], [Object], [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 476,
    reply_count: 47,
    like_count: 3258,
    quote_count: 69
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417198806177763342',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1417180530215309319' ] },
  created_at: 'Mon, 19 Jul 2021 19:05:00 GMT',
  text: 'ʜᴇᴀᴅʟɪɴɪɴɢ ɪɴ ʜ-ᴛᴏᴡɴ 🤘\n' +
    '@TheBeast_UFC \n' +
    '\n' +
    '[ #UFC265 Saturday August 7th live on E+ PPV ] https://t.co/2TLaMlMRub',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 232,
    reply_count: 36,
    like_count: 2842,
    quote_count: 16
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417168103817977856',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1415822108400099329', '3_1415822108513370114' ] },
  created_at: 'Mon, 19 Jul 2021 17:03:00 GMT',
  text: 'ᴇɴᴛᴇʀ ᴛʜᴇ ꜱᴀɴᴅᴍᴀɴ 😤 \n' +
    '\n' +
    '💢 @CorySandhagen gets back into the Octagon this weekend. \n' +
    '\n' +
    '[ #UFCVegas32 | Saturday July 25 | LIVE on #ESPNPlus ] https://t.co/39iQ3F9EBN',
  entities: {
    urls: [ [Object], [Object] ],
    hashtags: [ [Object], [Object] ],
    mentions: [ [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 88,
    reply_count: 26,
    like_count: 1226,
    quote_count: 4
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417153004440940545',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '13_1415829829501341699' ] },
  created_at: 'Mon, 19 Jul 2021 16:03:00 GMT',
  text: 'Sandhagen. Dillashaw. This Saturday.\n' +
    '\n' +
    '[ #UFCVegas32 | July 24 | LIVE on #ESPNPlus ] https://t.co/Zk6mICz6yx',
  entities: {
    urls: [ [Object] ],
    annotations: [ [Object], [Object] ],
    hashtags: [ [Object], [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 233,
    reply_count: 42,
    like_count: 1735,
    quote_count: 59
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1417122805347504132',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1415836577704468482' ] },
  created_at: 'Mon, 19 Jul 2021 14:03:00 GMT',
  text: 'Happy Birthday to the P4P @JonnyBones 🙌 https://t.co/LshLaF5aYZ',
  entities: { urls: [ [Object] ], mentions: [ [Object] ] },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 1279,
    reply_count: 345,
    like_count: 14471,
    quote_count: 225
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416820563746693120',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1416642283047251968' ] },
  created_at: 'Sun, 18 Jul 2021 18:02:00 GMT',
  text: 'A new vision 👀 for the lightweight division 🙌 #UFCVegas31 https://t.co/2bq4sE0Q2q',
  entities: { urls: [ [Object] ], hashtags: [ [Object] ] },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 398,
    reply_count: 76,
    like_count: 8179,
    quote_count: 27
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416805464084340738',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '13_1416640086859390978' ] },
  created_at: 'Sun, 18 Jul 2021 17:02:00 GMT',
  text: 'Made the 5️⃣ years off COUNT! 🧁 TATE 2.0 is here! #UFCVegas31 https://t.co/6gBwImaH6B',
  entities: { urls: [ [Object] ], hashtags: [ [Object] ] },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 93,
    reply_count: 24,
    like_count: 1466,
    quote_count: 5
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416790364845842442',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1416635432209584128' ] },
  created_at: 'Sun, 18 Jul 2021 16:02:00 GMT',
  text: '@MieshaTate has her eyes on the belt! 🏆 Who should she take on next? https://t.co/EdltqrkGuN',
  entities: { urls: [ [Object] ], mentions: [ [Object] ] },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 28,
    reply_count: 33,
    like_count: 436,
    quote_count: 4
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416775265317961734',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '13_1416640610430193666' ] },
  created_at: 'Sun, 18 Jul 2021 15:02:00 GMT',
  text: 'A full team effort! 🙌 Who should be next for @MakhachevMMA? https://t.co/6V3mTrcC2p',
  entities: { urls: [ [Object] ], mentions: [ [Object] ] },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 241,
    reply_count: 90,
    like_count: 3026,
    quote_count: 33
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416760417523695616',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1414104655534063618' ] },
  created_at: 'Sun, 18 Jul 2021 14:03:00 GMT',
  text: 'The #UFCeSportsLeague Summer Series 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝙀𝙎! 💢\n' +
    '\n' +
    '🎮 Tune in as the top #UFC4 players compete LIVE starting at 2pmET!\n' +
    '\n' +
    '[ https://t.co/4aEPQ4f5kV ] https://t.co/UdyCMHV26r',
  entities: { urls: [ [Object], [Object] ], hashtags: [ [Object], [Object] ] },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 18,
    reply_count: 8,
    like_count: 143,
    quote_count: 2
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416745569754701834',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '13_1415834416035688448' ] },
  created_at: 'Sun, 18 Jul 2021 13:04:00 GMT',
  text: '𝙃-𝙏𝙤𝙬𝙣 𝘽𝙤𝙪𝙣𝙙 🤘\n' +
    '\n' +
    '[ #UFC265 | Saturday August 7th on E+ PPV ] https://t.co/LYKucwtkLg',
  entities: { urls: [ [Object] ], hashtags: [ [Object] ] },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 185,
    reply_count: 31,
    like_count: 1139,
    quote_count: 29
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416653967212179458',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '13_1416616059256283140' ] },
  created_at: 'Sun, 18 Jul 2021 07:00:00 GMT',
  text: '🇵🇱 @Gamer_MMA improves to 1️⃣9️⃣ - 1️⃣\n' +
    '\n' +
    "Who's next for the surging LW?! #UFCVegas31 https://t.co/UZKxVrQM2U",
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 120,
    reply_count: 54,
    like_count: 2295,
    quote_count: 25
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416629794901426179',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  created_at: 'Sun, 18 Jul 2021 05:23:57 GMT',
  text: `RT @UFCNews: "It doesn't matter how many fights, I'm going to smash everybody."\n` +
    '\n' +
    "@MakhachevMMA feels confident that he isn't far from earni…",
  entities: { mentions: [ [Object], [Object] ] },
  author_id: '6446742',
  public_metrics: { retweet_count: 140, reply_count: 0, like_count: 0, quote_count: 0 }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416629404243877888',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '7_1416629094096113665' ] },
  created_at: 'Sun, 18 Jul 2021 05:22:24 GMT',
  text: 'Too good just to name 2️⃣\n' +
    '\n' +
    '💰 Here are the 4️⃣ fighters taking home some extra cash! #UFCVegas31 https://t.co/jjQPx03BPU',
  entities: { urls: [ [Object] ], hashtags: [ [Object] ] },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 95,
    reply_count: 27,
    like_count: 1119,
    quote_count: 14
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416626640222785538',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1416626476133220353' ] },
  created_at: 'Sun, 18 Jul 2021 05:11:25 GMT',
  text: "We couldn't take our eyes off this one 👀\n" +
    '\n' +
    '💸 @Moggly_Benitez and @BillyQMMA take home the FOTN honors. \n' +
    '\n' +
    '[ #UFCVegas31 | B2YB: @ToyoTires ] https://t.co/jiy3Z28hDX',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object], [Object], [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 59,
    reply_count: 22,
    like_count: 669,
    quote_count: 10
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416626195848843268',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '7_1416625938561789956' ] },
  created_at: 'Sun, 18 Jul 2021 05:09:39 GMT',
  text: '“One day... I’m gonna be here with my belt.” 🏆 @MakhachevMMA #UFCVegas31 https://t.co/h31iTN0QZI',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 207,
    reply_count: 69,
    like_count: 2068,
    quote_count: 20
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416622962539565059',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1416622752899887105' ] },
  created_at: 'Sun, 18 Jul 2021 04:56:48 GMT',
  text: "🇷🇺 @MakhachevMMA's submission was TIGHT 👀 #UFCVegas31 https://t.co/CoeAMoPNJx",
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 647,
    reply_count: 87,
    like_count: 6178,
    quote_count: 81
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416621935052554243',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '3_1416621733428142082' ] },
  created_at: 'Sun, 18 Jul 2021 04:52:43 GMT',
  text: 'The future heir to the throne? 🤔👑\n' +
    '\n' +
    '[ @TeamKhabib | @MakhachevMMA | #UFCVegas31 ] https://t.co/8fci7HH3CT',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object], [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 487,
    reply_count: 70,
    like_count: 3797,
    quote_count: 38
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416621570722721794',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  created_at: 'Sun, 18 Jul 2021 04:51:16 GMT',
  text: `RT @UFCNews: "I'm just getting started. This is just the tip of the iceberg."\n` +
    '\n' +
    '@MieshaTate returns to the Octagon with a win #UFCVegas31🔉⬆️…',
  entities: { hashtags: [ [Object] ], mentions: [ [Object], [Object] ] },
  author_id: '6446742',
  public_metrics: { retweet_count: 110, reply_count: 0, like_count: 0, quote_count: 0 }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416619946939932674',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '13_1416619876559597568' ] },
  created_at: 'Sun, 18 Jul 2021 04:44:49 GMT',
  text: `"You can run, but you can't hide. I'm coming. I'm here." 💢\n` +
    '\n' +
    '🗣 @MakhachevMMA calling out the lightweight division. #UFCVegas31 https://t.co/3LBO542jKq',
  entities: {
    urls: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 1059,
    reply_count: 149,
    like_count: 5322,
    quote_count: 160
  }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416618967225958400',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  created_at: 'Sun, 18 Jul 2021 04:40:55 GMT',
  text: 'RT @edmenshahbazyan: Beautiful performance. Congrats to Islam!! #UFCVegas31',
  entities: {
    annotations: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object] ]
  },
  author_id: '6446742',
  public_metrics: { retweet_count: 32, reply_count: 0, like_count: 0, quote_count: 0 }
}
{
  name: 'UFC',
  username: 'ufc',
  id: '1416618940361543680',
  profile_image_url: 'https://pbs.twimg.com/profile_images/1080527775256080389/_y_vhu2u.jpg',
  url: 'https://t.co/NqXFtgoo9Z',
  attachments: { media_keys: [ '16_1416618919423619075' ] },
  created_at: 'Sun, 18 Jul 2021 04:40:49 GMT',
  text: 'Another win for Coach Khabib! 🙌\n' +
    '\n' +
    '[ @TeamKhabib | #UFCVegas31 ] https://t.co/A2l46AYrPr',
  entities: {
    urls: [ [Object] ],
    annotations: [ [Object] ],
    hashtags: [ [Object] ],
    mentions: [ [Object] ]
  },
  author_id: '6446742',
  public_metrics: {
    retweet_count: 1699,
    reply_count: 140,
    like_count: 15972,
    quote_count: 121
  }
}]
