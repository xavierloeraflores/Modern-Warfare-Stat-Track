
var platform;
var gamertag;
var idnumber;
window.onload = function() {
    $("user_input").onclick = user();

};


var user = function() {
		console.log("hello bitch");
    var platform = user_form.elements["platform"].value;
    var gamertag = user_form.elements["gamertag"].value;
    var idnumber = user_form.elements["idnumber"].value;


    if (platform == "battle"){
    gamertag = gamertag + "%23" + idnumber; }
    console.log("|" + platform + "|");
    console.log("/n|" + gamertag + "|");
	$.getJSON(
    "https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/" + platform + "/gamer/" + gamertag + "/profile/type/mp",
    function(mw) {
        console.log(mw);
        var name = mw.data.username;
        var level = mw.data.level;
        var kdRatio = mw.data.lifetime.all.properties.kdRatio;
        
        var kills_357 = mw.data.lifetime.itemData.weapon_pistol.iw8_pi_cpapa.properties.kills;
        
        console.log(name + " " + level + " "+ kdRatio + " " + kills_357);
        
        var test = mw.data.lifetime.itemData.weapon_sniper.iw8_sn_alpha50.properties.kdRatio;
         console.log(test);
    }
);

};



