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
    
    var warzoneWins = mw.data.lifetime.mode.br.properties.wins;
    var warzoneKills = mw.data.lifetime.mode.br.properties.kills;
    var warzoneDowns = mw.data.lifetime.mode.br.properties.downs;
    var warzoneDeaths = mw.data.lifetime.mode.br.properties.deaths;
    var warzoneWins = mw.data.lifetime.mode.br.properties.wins;
    var warzoneGamesPlayed = mw.data.lifetime.mode.br.properties.gamesPlayed;
    var warzoneWinRate = warzoneWins/warzoneGamesPlayed;
        var playerData ="<tr><td><b>" + name + "&nbsp;&nbsp;&nbsp;</b></td>" + "<td>" + level +"<td>" + warzoneWins + "</td><td>" + kdRatio + "</td>" ;
    return playerData;
}//Converts user data to string

function friendToString(mw){//Converts user data to string
    var name = mw.data.username;
    var level = mw.data.level;
    var kdRatio = mw.data.lifetime.all.properties.kdRatio;
    
    var warzoneWins = mw.data.lifetime.mode.br.properties.wins;
    var warzoneKills = mw.data.lifetime.mode.br.properties.kills;
    var warzoneDowns = mw.data.lifetime.mode.br.properties.downs;
    var warzoneDeaths = mw.data.lifetime.mode.br.properties.deaths;
    var warzoneWins = mw.data.lifetime.mode.br.properties.wins;
    var warzoneGamesPlayed = mw.data.lifetime.mode.br.properties.gamesPlayed;
    var warzoneWinRate = warzoneWins/warzoneGamesPlayed;
        var playerData ="<tr><td>" + name + "&nbsp;&nbsp;&nbsp;</td>" + "<td>" + level +"<td>" + warzoneWins + "</td><td>" + kdRatio + "</td>" ;
    return playerData;
}

function gotuserData(mw){
    console.log(mw);
    userText += dataToString(mw);;
     document.getElementById("user").innerHTML = userText;
}//Inserts user data onto page
function gotfriendData(mw){
    console.log(mw);
    friendText += friendToString(mw);;
     document.getElementById("friendtable").innerHTML = friendText;
}//Inserts user data onto page

