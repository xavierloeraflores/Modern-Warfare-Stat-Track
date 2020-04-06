var friendcount;
var friendText;
var userText;
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
    var add_platform = user_form.elements["platform"].value;
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
        var playerData ="</br><b>" + name + "</b></br>" + "Level: " + level + "\n kd: " + kdRatio + "</br>" ; 
    return playerData;
}

function gotuserData(mw){
    console.log(mw);
    userText += dataToString(mw);;
     document.getElementById("user").innerHTML = userText;
}
function gotfriendData(mw){
    console.log(mw);
    friendText += dataToString(mw);;
     document.getElementById("friends").innerHTML = friendText;
}


