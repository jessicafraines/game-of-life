function matrixCreator(tr, td){
  var matrix = [];
  for(var i = 0; i < tr; i++){
    matrix[i] = [];
    for(var j = 0; j < td; j++){
      matrix[i][j] = Math.round(Math.random())
    }
  }
  return matrix;
}

function addItemToRow($table, item){
  var $tr = document.createElement("tr");
  $tr.innerHTML = '';
  $table.appendChild($tr);
}
function addItemToColumn($table, item){
  var $td = document.createElement("td");
  $td.innerHTML = item;
  $table.appendChild($td);
  if(item === 0){
    $td.style.background= "black";
  }else{
    $td.style.background= "red";
  }
}

document.addEventListener("DOMContentLoaded", function(){
  var $table = document.getElementById("table");
  var matrix = matrixCreator(3,3);

    for(var i = 0; i < matrix.length; i++){
      addItemToRow($table, matrix[i]);
 
      for(var j = 0; j < matrix[i].length; j++){
        addItemToColumn($table, matrix[i][j]);

      }
    }
});
