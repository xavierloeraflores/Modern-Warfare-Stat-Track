var friendcount;
var friendText;
var userText;
var column;
var add_platform;
window.onload = function() {
    refresh();
};//Refreshes player data onload



function addFriend(){//Adds Friend URL to Local Storage
   if(localStorage.getItem('friendcount')==null){
        friendcount=0; localStorage.setItem('friendcount',friendcount);
    };
    localStorage.setItem('friendcount', parseInt(localStorage.getItem('friendcount'))+1);
    var friendkey = "friend" + String(localStorage.getItem('friendcount'));
    
    localStorage.setItem(friendkey, getUserURL());
    
}//Adds Friend URL to Local Storage

function adduser(){//Adds User Url to local Storage 
    localStorage.setItem('user', getUserURL());
    console.log(localStorage.getItem('user'));
    refresh();
}//Adds User Url to local Storage 

function getPlatform(platform){//gets Platform input data
	add_platform = platform;
	console.log(platform);
}//gets Platform input data
function getUserURL(){//Converts User input into URL data
    var add_gamertag = user_form.elements["gamertag"].value;
    var add_idnumber = user_form.elements["idnumber"].value;
    if (add_platform == "battle"){
        add_gamertag = add_gamertag + "%23" + add_idnumber; }
    var userURL = add_platform + "/gamer/" + add_gamertag;
    return userURL; 
}//Converts User input into URL data






function refresh (){
    userText="";
    friendText="";
    getUserData();
    getFriendData(parseInt(localStorage.getItem('friendcount')));
}//calls getUserData & getFriendData
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

function dataToString(mw){//Converts user data to string
        var name = mw.data.username;
        var level = mw.data.level;
        var kdRatio = mw.data.lifetime.all.properties.kdRatio;
        var playerData ="</br><b>" + name + "</b></br>" + "Level: " + level + "<br> KD: " + kdRatio + "</br>" ; 
    return playerData;
}//Converts user data to string
function friendToString(mw){//Converts friend data to string
        var name = mw.data.username;
        var level = mw.data.level;
        var kdRatio = mw.data.lifetime.all.properties.kdRatio;
        var playerData ="<tr><td>" + name + "&nbsp;&nbsp;&nbsp;</td>" + "<td>" + level + "</td><td>" + kdRatio + "</td>" ; 
    return playerData;
}//Converts friend data to string

function gotuserData(mw){
    console.log(mw);
    userText += dataToString(mw);;
     document.getElementById("user").innerHTML = userText;
}//Inserts user data onto page
function gotfriendData(mw){
    console.log(mw);
    friendText += friendToString(mw);;
     document.getElementById("friends").innerHTML = "<caption>Friend List</caption><tr><th>Name</th><th>Level</th><th>KD</th></tr>" + friendText;
}//Inserts user data onto page


//Actual
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
            if (column ==0 ){//Sorts Names
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
                }}
            if (column ==1 ){//Sorts Levels
                if (parseInt(x.innerHTML.toLowerCase()) < parseInt(y.innerHTML.toLowerCase())) {
                shouldSwitch = true;
                break;
          }
                }//Sorts Levels
            if (column == 2){//Sorts KD
              if (parseFloat(x.innerHTML.toLowerCase()) < parseFloat(y.innerHTML.toLowerCase())) {
                shouldSwitch = true;
                break;
          }
            }//Sorts KD
      }//Checks Every Row
      if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
      }//Actually performs the Switch
  }//Sorting Algorithm
  console.log(column);
}//Sorts
function getSortType(type){
	column = type;
}//Gets user sort input
