var friendcount;
var friendText;
var userText;
var column;
var add_platform;
window.onload = function() {
    refresh();
};//Refreshes player data onload


function hideForm(shouldHide){
    var x = document.getElementById("playerform");
    if (shouldHide==true){
    x.style.display = "none";
    }
    else{
        x.style.display = "block"
    }
    
}
function refresh (){
    userText="";
    friendText="";
    getUserData();
   hideForm(true); getFriendData(parseInt(localStorage.getItem('friendcount')));
}//calls getUserData & getFriendData
