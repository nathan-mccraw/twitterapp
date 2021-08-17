# "MockingJay" -- Twitter API App

MockingJay allows users to search for tweets and Twitter users, see a Twitter user's timeline, add/remove a Twitter user to a "Favorites List", and display a random tweet from the "Favorites List". MockingJay has only obtained a 'read-only' developer account with Twitter, so no information can be passed/posted/sent to Twitter, only retrieved. MockingJay is a responsive website that is optimized for the desktop and the iPhone X.

Use the MockingJay -- Twitter API App [here](https://mockingjay-twitterproxy.herokuapp.com/).

## Instructions for Use

### Homepage

The homepage of MockingJay is a landing page with a navigational toolbar at the top fo the screen. This toolbar serves as the primary method of navigation between the home page, the search page, the favorites page, and the instructions/about page.

![SplashScreenSnip](https://user-images.githubusercontent.com/84479635/126734564-99d403a3-b10e-417c-bb11-f3ed099ccb8e.JPG)

##

### Search Tab

The search page has three main components. A secondary navigation bar with an input field located below the banner, a favorites list displayed in a sidebar, and the search results located in the main body of the browser.

![TweetContentSearch](https://user-images.githubusercontent.com/84479635/126735087-0f573018-7a60-4c78-864c-4be0565febe1.JPG)

#### Tweet Content Search

Entering text into the input field and submitting it, either via keyboard or mouse click on the search icon, returns tweets in the main body of the browser containing tweet content matching the text submitted. The user can see that the results they are viewing are from a tweet content search by observing the downward pointing boxed caret icon and active colored "tweet" text on the secondary navbar. The browser will display up to 30 tweets from the search; the user can add any Twitter handle returned from the search to the favorites list by clicking on the "Add Fav" icon located beside the username. Clicking the username will replace the current search in the main body of the browser with that Twitter handle's timeline, displaying that Twitter handle's last 30 tweets.

![UserSearch](https://user-images.githubusercontent.com/84479635/126735411-2e5e62de-b776-4b57-bcdb-ac4f2e95046f.JPG)

#### User Search

Due to limitations of the Twitter API, MockingJay currently only supports a single, exact match, username search. After submitting a search using the secondary toolbar in the same way as searching tweet content, navigate to the user page utilizing the secondary toolbar "Users" link. The single, exact match username will be displayed in the main body of the browser, with the same ability to add the Twitter handle to favorites using the "Add Fav" icon as with the tweet content search. Clicking on the username will also replace the search on the "Tweets" page with that Twitter handle's timeline in the main body of the browser.

#### Favorites List

The favorites list on the left sidebar of the search page allows users to do two things: first, it allows the user to click on a Twitter handle that has been designated as a favorite which will both display that Twitter handle's timeline containing a maximum of its last 30 tweets, and by navigating to the "Users" tab on the secondary navbar, displays additional public metrics associated with that Twitter handle. Secondly, the favorites list on the left sidebar allows a user to remove a Twitter handle from it's favorite list by clicking the corresponding icon beside the Twitter handle.

##

![FavoritesTab](https://user-images.githubusercontent.com/84479635/126736241-f98f2b9d-223c-42c8-8f41-10ff1a68c5c3.JPG)

### Favorites Tab

Navigating to the favorites tab via the main navigational toolbar located at the top of the application displays additional public metrics about the user's favorites list. Clicking on a twitter handle will display a random tweet from that Twitter handle's timeline.

![RandomTweet](https://user-images.githubusercontent.com/84479635/126736633-1282a335-e22a-45d9-9d0d-93fd5da0c2c3.JPG)

##

![About Home](https://user-images.githubusercontent.com/84479635/126736799-0f28aa50-9e9e-45ed-b8c2-09d35cc67e91.JPG)

### About/Instructional Tab

The about/instructional page displays information about the application and how to use the application. Please reference this page for any further questions regarding the use of this application as it contains three items of content: a broad overview of the application, how to use the search functionality, and how to use the favorite user's functionality.

## Installing MockingJay Locally

1. Fork this repository: makes a copy of this repository and stores it to your repository.
2. Clone the repository to your local machine using the command line: [Git Clone](https://git-scm.com/docs/git-clone)
3. Run npm install using command line: Go to the root directory -- i.e. if you navigated to C:\Users\{YOUR ACCOUNT NAME}\Documents when you initiated the Git Clone, then navigate to C:\Users\{YOUR ACCOUNT NAME}\Documents\twitterApp -- and run "npm install" -- this installs all npm depencies for the server side of the application. Once this is completed, navigate to C:\Users\{YOUR ACCOUNT NAME}\Documents\twitterApp\client using the command line and run "npm install".
4. The application is fully installed on your local system, but still lacks needed authentication measures to access the twitter API. If you have a twitter developer portal, retrieve your API Key and API Secret Key; if you do not have a twitter developer portal, then [apply for access](https://developer.twitter.com/en/apply-for-access).
5. Create an .env file -- Navigate back to the root directory C:\Users\{YOUR ACCOUNT NAME}\Documents\twitterApp in the command line and type "code .", this will open the application in VS Code [VS Code installation required](https://code.visualstudio.com/). Create a new file: ".env" in the root directory.

![createENVfile](https://user-images.githubusercontent.com/84479635/127429466-2369df29-d388-4a33-913f-dc6d65b88ee6.JPG)

6. Insert your API Key and API secret key in this .env file

![ENVfile](https://user-images.githubusercontent.com/84479635/127429719-e36ef441-4c55-41eb-8f97-9e124c7fd675.JPG)

7. In the command line, navigate to the root directory of the application C:\Users\{YOUR ACCOUNT NAME}\Documents\twitterApp, and run "npm run dev".

## Summary of Build

The MockingJay app implements HTML, React/JavaScript, CSS/Bootstrap, NodeJS, ExpressJS and is deployed on Heroku via Github. The application utilizes the [twitter API Version 2](https://developer.twitter.com/en/docs/twitter-api/early-access), which in early access and is not yet fully featured; most notable is the inability to embed video contained in tweets. MockingJay has obtained a 'read-only' developer account and as such, no information can be posted or sent to Twitter accounts, only retrieved and viewed. The Twitter API does not allow Cross-Origin Resource sharing; in order to resolve this, Mockingjay implements a client-side API written in ExpressJS. The client-side API receives a HTTP request from the client browser, forwards the request to Twitter, and receives the HTTP response from the Twitter API. The client-side API manipulates the data structures it receives and sends it to the client browser. This minimizes information sent to the client browser to only what the browser needs to display and allows all data manipulation and handling to occur at the same time and space complexity to minimize computing time and memory space. The client-side API sends the HTTP response to the client browser, where the client browser only must pick and choose what data needs to be displayed at the desired location. Another important aspect of the client-side API is for security purposes. An environmental variable is stored in the client API, not visible to the client browser, that is used to authenticate the application to the twitter API. The application posts an API access key to the twitter API and receives an application specific authentication token which is used by the browser to retrieve the twitter data, all of which is not visible by the browser.

#### Author

Nathan McCraw -- Software Developer [LinkedIn](https://www.linkedin.com/in/nathan-mccraw-5291535b/) | [Personal Website](https://www.nathanmccraw.com/)
