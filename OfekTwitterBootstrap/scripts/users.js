////////////////////////////////////////// JAVASCRIPT ///////////////////////////////////////////////////

// FUNCTIONS
window.onload = function() {
	loadAllUsers();

	document.getElementById("filter-textarea").addEventListener("keyup", filter);
}

var avatar = "images/useravatar.png";
var usersListId = "users-list";
var followeeListId = "followees-list";
var buttonFollow = "follow";
var buttonUnfollow = "unfollow";

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

		if(user.following){
			addUser(user.name, user.following, user.id, avatar, followeeListId);
		}
		else
		{
			addUser(user.name, user.following, user.id, avatar, usersListId);
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


	if(listId == usersListId)
	{
		newUser.id = "user" + id;
		newUser.className="user-cell col-lg-2 border border-secondary rounded";
	}
	else
	{
		newUser.id = "followee" + id;
		newUser.className="user-cell border border-secondary rounded col-lg-6 offset-lg-6";
	}

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
	newButton.id = "button" + id;
	newButton.className = "btn btn-primary btn-sm";
	newButton.type = "submit";

	followState ? newButton.textContent = buttonUnfollow : newButton.textContent = buttonFollow;

	newButton.addEventListener("click", function (event) {
		var buttonClicked = event.target;
		changeFollowStatus(id, buttonClicked);
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

function changeFollowStatus(id, buttonCliked) {
	var followeesList = document.getElementById(followeeListId);
	var usersList = document.getElementById(usersListId);
	var user = getUserById(id);

	if (user.following) {
		followeesList.removeChild(buttonCliked.parentElement);
		user.following = !user.following;
		addUser(user.name, user.following, user.id, avatar, usersListId);
	}
	else {
		usersList.removeChild(buttonCliked.parentElement);
		user.following = !user.following;
		addUser(user.name, user.following, user.id, avatar, followeeListId);
	}
}

function filter() {
	var filterString = document.getElementById("filter-textarea").value;
    var notFollowingUsers = users.filter(x=> !x.following);

	for(var i = 0; i < notFollowingUsers.length; i++)
	{
		var user = notFollowingUsers[i];
		user.name.substr(0, filterString.length).toLowerCase() === filterString.toLowerCase() ?
			document.getElementById('user' + user.id).style.display = '' :
			document.getElementById('user' + user.id).style.display = 'none';
	}
}

function getUserById(id) {
	for(var i = 0; i < users.length; i++)
	{
		if(users[i].id == id)
		{
			return users[i];
		}
	}
}
