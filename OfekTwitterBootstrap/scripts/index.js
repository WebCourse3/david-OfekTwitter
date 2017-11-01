////////////////////////////////////////// JAVASCRIPT ///////////////////////////////////////////////////

// FUNCTIONS
window.onload = function() {
	loadAllTweets();

	$("#publish-tweet")[0].addEventListener("click", publishTweet);
}

var avatar = "images/useravatar.png";
var user = "David";

var tweets = [
	{username: 'Bobo', text: 'hello followers!'},
	{username: 'Elvis', text: 'this exercise is really easy!'},
	{username: 'Mimi', text: 'I want to go to sleep'}
];

function loadAllTweets() {
	for(var i=0; i < tweets.length; i++){
		var tweet = tweets[i];
		addTweet(tweet.username, tweet.text, avatar);
	}
}

function publishTweet() {
	var publishTextera = document.getElementById("newTweetText");

	if(publishTextera.elements != '')
	{
		console.log("publishTextera: " + publishTextera.value)
		addTweet(user,publishTextera.value, avatar);
		tweets.push({username: user, text: publishTextera.value});
		publishTextera.value = '';
	}
}

function addTweet(user,msg,avatar) {
	var newTweet = createNewTweet(user,msg,avatar);
	var tweetList = document.getElementById("tweet-list");
	tweetList.appendChild(newTweet);
}

function createNewTweet(user, msg, avatar){
	var newTweet = document.createElement("div");
	newTweet.className="row tweet-row";
	newTweet.appendChild(createNewAvatarDiv(avatar));
	newTweet.appendChild(createTweetDataDiv(user, msg));
	return newTweet;
}

function createNewAvatarDiv(avatar) {
	var tweetAvatarDiv =  document.createElement("div");
	tweetAvatarDiv.className = "col-lg-1 offset-lg-1 tweet-avatar";
	tweetAvatarDiv.appendChild(createNewImg(avatar));
	return tweetAvatarDiv;
}

function createNewImg(picture){
	var newImg = document.createElement('img');
	newImg.src= picture;
	return newImg;
}

function createTweetDataDiv(user, msg) {
	var tweetUserDiv = document.createElement("div");
	tweetUserDiv.className = "col-lg-10 tweet-data";
	tweetUserDiv.appendChild(createUsernameHeading(user));
	var msg_text = document.createTextNode(msg);
	tweetUserDiv.appendChild(msg_text);
	return tweetUserDiv;
}

function createUsernameHeading(user) {
	var tweetUserHeading = document.createElement("h6");
	tweetUserHeading.className = "tweet-username";
	var msg_text = document.createTextNode(user);
	tweetUserHeading.appendChild(msg_text);
	return tweetUserHeading;
}
