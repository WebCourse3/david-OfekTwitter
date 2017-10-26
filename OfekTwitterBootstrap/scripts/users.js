////////////////////////////////////////// JAVASCRIPT ///////////////////////////////////////////////////

// FUNCTIONS
window.onload = function() {
	loadAllUsers();
	loadFollweesList();
}

var avatar = "images/useravatar.png";
var usersListId = "users-list";
var followeeListId = "followees-list";

var users = [
	{name: 'Marty McFly', following:false, id:1},
	{name: 'James Bond', following:false, id:2},
	{name: 'Janis Joplin', following:true, id:3},
	{name: 'Mark Twain', following:false, id:4},
	{name: 'Albert Einstein', following:true, id:5},
	{name: 'Frodo', following:false, id:6},
	{name: 'Bill Gates', following:false, id:7}
];

function loadAllUsers() {
	for(var i=0; i < users.length; i++){
		var user = users[i];
		addUser(user.name, user.following, user.id, avatar, usersListId);
	}
}

function loadFollweesList() {
	for(var i=0; i < users.length; i++){
		var user = users[i];

		if(user.following){
			addUser(user.name, user.following, user.id, avatar, followeeListId);
		}
	}
}

function addUser(name, followingState, id, avatar, listId) {
	var newUser = createNewUser(name, followingState, id, avatar, listId);
	var userList = document.getElementById(listId);
	userList.appendChild(newUser);
}

function createNewUser(name, followState, id, avatar, listId) {
	var newUser = document.createElement("div");
	newUser.id = id;

	if(listId == usersListId)
		newUser.className="user-cell col-lg-2 border border-secondary rounded";
	else
		newUser.className="user-cell border border-secondary rounded col-lg-6 offset-lg-6";

	newUser.appendChild(CreateNewAvatarDiv(avatar));
	newUser.appendChild(createNewFollowButton(followState, id));
	newUser.appendChild(CreateNewUsernameDiv(name));
	return newUser;
}

function CreateNewAvatarDiv(avatar) {
	var avatarDiv =  document.createElement("div");
	avatarDiv.className = "user-avatar-img";
	avatarDiv.appendChild(createNewImg(avatar));
	return avatarDiv;
}

function createNewImg(picture){
	var newImg = document.createElement('img');
	newImg.src= picture;
	return newImg;
}

function createNewFollowButton(followState, id){
	var newButton = document.createElement('button');
	newButton.className = "btn btn-primary btn-sm";
	newButton.type = "submit";
	followState ? newButton.appendChild(document.createTextNode('unfollow')) :
				  newButton.appendChild(document.createTextNode('follow'));

	newButton.addEventListener("click", function (event) {
		debugger;
		// changeFollowStatus(followState, id)
		var element = event.target.parentElement();

	});

	return newButton;
}

function CreateNewUsernameDiv(name) {
	var nameDiv =  document.createElement("div");
	nameDiv.className = "user-cell-name";
	nameDiv.appendChild(createNewParagraph(name));
	return nameDiv;
}

function createNewParagraph(string){
	var newParagraph = document.createElement('p');
	newParagraph.appendChild(document.createTextNode(string));
	return newParagraph;
}

function changeFollowStatus(followState, id) {
	var followeesList = document.getElementById(followeeListId);

	if (followState) {
		followeesList.removeChild(document.getElementById(id));
	}
	else {
		// removedUserCard = UnfolllowElement.removeChild(document.getElementById(userCardID));
		// FollowElement.appendChild(removedUserCard);
		// followButton.textContent = UnfollowText;
		// removedUserCard.className = followClassName;
		// isFollow = !isFollow;
	}
}
