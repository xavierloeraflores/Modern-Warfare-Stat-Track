var friendcount;
var friendText;
var userText;
var column;
var add_platform;
//Actual
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("friendtable");
  switching = true;
  while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 0; i < (rows.length-1 ); i++) {

            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[column];
            y = rows[i + 1].getElementsByTagName("TD")[column];
            if (column ==0 ){//Sorts Names
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
                }}
            if (column ==1 | column==2){//Sorts Levels
                if (parseInt(x.innerHTML.toLowerCase()) < parseInt(y.innerHTML.toLowerCase())) {
                shouldSwitch = true;
                break;
          }
                }//Sorts Levels
            if (column == 3){//Sorts KD
                console.log(x.innerHTML);
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
    sortTable();
    console.log("sorting");
}//Gets user sort input
