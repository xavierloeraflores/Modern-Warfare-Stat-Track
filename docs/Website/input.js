var friendcount;
var friendText;
var userText;
var column;
var add_platform;
function addFriend(){//Adds Friend URL to Local Storage
   if(localStorage.getItem('friendcount')==null){
        friendcount=0; localStorage.setItem('friendcount',friendcount);
    };
    localStorage.setItem('friendcount', parseInt(localStorage.getItem('friendcount'))+1);
    var friendkey = "friend" + String(localStorage.getItem('friendcount'));
    
    localStorage.setItem(friendkey, getUserURL());
    refresh();
}//Adds Friend URL to Local Storage

function adduser(){//Adds User Url to local Storage 
    localStorage.setItem('user', getUserURL());
    console.log(localStorage.getItem('user'));
    refresh();
}//Adds User Url to local Storage 

function getPlatform(platform){//gets Platform input data
	add_platform = platform;
	console.log(platform);
    if (platform=='battle'){
        $( "#idnumber" ).prop( "disabled", false );
    }
    else{
        $( "#idnumber" ).prop( "disabled", true );
    }
}//gets Platform input data
function getUserURL(){//Converts User input into URL data
    var add_gamertag = user_form.elements["gamertag"].value;
    var add_idnumber = user_form.elements["idnumber"].value;
    if (add_platform == "battle"){
        add_gamertag = add_gamertag + "%23" + add_idnumber; }
    var userURL = add_platform + "/gamer/" + add_gamertag;
    return userURL; 
}//Converts User input into URL data

