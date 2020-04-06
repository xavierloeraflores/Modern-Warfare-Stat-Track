var friendcount;
var friendText;
var userText;
var column;
var add_platform;
window.onload = function() {
    refresh();
};



function addFriend(){
   if(localStorage.getItem('friendcount')==null){
        friendcount=0; localStorage.setItem('friendcount',friendcount);
    };
    localStorage.setItem('friendcount', parseInt(localStorage.getItem('friendcount'))+1);
    var friendkey = "friend" + String(localStorage.getItem('friendcount'));
    
    localStorage.setItem(friendkey, getUserURL());
    
}

function adduser(){
    localStorage.setItem('user', getUserURL());
    console.log(localStorage.getItem('user'));
    refresh();
}

function getUserURL(){
    var add_gamertag = user_form.elements["gamertag"].value;
    var add_idnumber = user_form.elements["idnumber"].value;
    if (add_platform == "battle"){
        add_gamertag = add_gamertag + "%23" + add_idnumber; }
    var userURL = add_platform + "/gamer/" + add_gamertag;
    return userURL; 
}






function refresh (){
    userText="";
    friendText="";
    getUserData();
    getFriendData(parseInt(localStorage.getItem('friendcount')));
}

function getUserData() {
    	jQuery.getJSON(
    "https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/" + localStorage.getItem('user') + "/profile/type/mp",
    gotuserData);
	
};
function getFriendData(i) {
    var user = "friend"+String(i);
    var userID = localStorage.getItem(user);
    
    jQuery.getJSON(
    "https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/" + userID + "/profile/type/mp",
    gotfriendData);
    if(i>1){
        getFriendData(i-1);
    };

};

function dataToString(mw){
        var name = mw.data.username;
        var level = mw.data.level;
        var kdRatio = mw.data.lifetime.all.properties.kdRatio;
        var playerData ="</br><b>" + name + "</b></br>" + "Level: " + level + "<br> KD: " + kdRatio + "</br>" ; 
    return playerData;
}
function friendToString(mw){
        var name = mw.data.username;
        var level = mw.data.level;
        var kdRatio = mw.data.lifetime.all.properties.kdRatio;
        var playerData ="<tr><td>" + name + "</td>" + "<td>Level: " + level + "</td><td>KD: " + kdRatio + "</td>" ; 
    return playerData;
}

function gotuserData(mw){
    console.log(mw);
    userText += dataToString(mw);;
     document.getElementById("user").innerHTML = userText;
}
function gotfriendData(mw){
    console.log(mw);
    friendText += friendToString(mw);;
     document.getElementById("friends").innerHTML = "<caption>Friend List</caption><tr><th>Name</th><th>Level</th><th>KD</th></tr>" + friendText;
}
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("friends");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[column];
      y = rows[i + 1].getElementsByTagName("TD")[column];
      if (column < 1){
	  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
	} else{
	  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
		shouldSwitch = true;
        break;
      }
	}
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  console.log(column);
}

function getSortType(type){
	column = type;
}
function getPlatform(platform){
	add_platform = platform;
	console.log(platform);
}
