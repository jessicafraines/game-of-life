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

$(document).ready(function(){//jquery
  var matrix = matrixCreator(30,30);
  generateGrid(matrix);

  function generateGrid(matrix){
   // var $table = $('#table');
    // $table.innerHTML = '';
    $('#table').html('');//REPLACED LINE 18
    matrix.forEach(function(row){
    //  var $tr = document.createElement('tr');
      var $tr = $('<tr></tr>')//REPLACED LINE 21;
        row.forEach(function(cell){
          $td = createTableCell(cell);
          $tr.append($td);//jquery
        });
        $('#table').append($tr); //jquery
    });
  }
  function createTableCell(item){
    //var $td = document.createElement('td');
    var $td = $('<td></td>')
        
    if(item === 1){
      $td.addClass('alive');
    }else{
      $td.addClass('dead');
    }
    return $td;
  }
  function livingNeighborCount(x, y){
    var neighborsArray = neighbors(x, y);
    var count = 0;
    neighborsArray.forEach(function(coord){
      count += matrix[coord[0]] [coord[1]];
    });
    return count;
  }
  function neighbors(x, y){
    var maxX = matrix.length;
    var maxY = matrix[0].length;

    var neighbors = [];
    //top left
    if(x-1 >= 0 && x-1 < maxX && y-1 >= 0 && y-1 < maxY){
      neighbors.push([x-1, y-1]);
    }
    //top 
    if(x-1 >= 0 && x-1 < maxX && y >= 0 && y < maxY){
      neighbors.push([x-1, y]);
    }
    //top right
    if(x-1 >= 0 && x-1 < maxX && y+1 >= 0 && y+1 < maxY){
      neighbors.push([x-1, y+1]);
    }
    //left
    if(x >= 0 && x < maxX && y-1 >= 0 && y-1 < maxY){
      neighbors.push([x, y-1]);
    }
    //right
    if(x >= 0 && x < maxX && y+1 >= 0 && y+1 < maxY){
      neighbors.push([x, y+1]);
    }
    //bottom left
    if(x+1 >= 0 && x+1 < maxX && y-1 >= 0 && y-1 < maxY){
      neighbors.push([x+1, y-1]);
    }
    //bottom 
    if(x+1 >= 0 && x+1 < maxX && y >= 0 && y < maxY){
      neighbors.push([x+1, y]);
    }
    //bottom right
    if(x+1 >= 0 && x+1 < maxX && y+1 >= 0 && y+1 < maxY){
      neighbors.push([x+1, y+1]);
    }
    return neighbors;
  }
  function calculateNextState(currentState){
    var nextState = [];
    currentState.forEach(function(currentRow, x){
      var nextRow = [];
      currentRow.forEach(function(currentCell, y){
        var livingCount = livingNeighborCount(x, y);
        var nextCellState;
        if(livingCount < 2){
          nextCellState = 0;
        }else if(livingCount > 3){
          nextCellState = 0;
        }else if(livingCount === 3){
          nextCellState = 1;
        }else{
          nextCellState = currentCell;
        }
        nextRow.push(nextCellState);
      });
      nextState.push(nextRow);
    });
    return nextState;
  }
  
  document.querySelector('#tick').addEventListener('click', function(){
    matrix = calculateNextState(matrix);
    generateGrid(matrix);
  });
}); //closing for DOMContentLoaded
