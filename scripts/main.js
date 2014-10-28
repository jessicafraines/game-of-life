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
  $td.innerHTML = '';
  $table.appendChild($td);
  if(item === 0){
    $td.style.background= "#cd5c5c";
  }else{
    $td.style.background= "#008b8b";
  }
}

document.addEventListener("DOMContentLoaded", function(){
  var $table = document.getElementById("table");
  var matrix = matrixCreator(30,30);

  matrix.forEach(function(tr){
    addItemToRow($table, tr);
    tr.forEach(function(td){
      addItemToColumn($table, td);
    });
  }); 
}); //closing for DOMContentLoaded
