module.exports = function solveSudoku(matrix) {
  const arr = matrix;
  for (let r=0; r < 9; r++){
    for (let c=0; c < 9; c++){
      //__________It was in my nightmare__________
      if (arr[r][c] == 0){
        let row = [];
        for(let i=0; i<9; i++){
          row.push(arr[r][i]);
        }
        let column = [];
        for(let n=0; n<9; n++){
          column.push(arr[n][c]);
        }
        let cell = makeCell(arr,r,c);
        
        // brute force
        for (let q = 1; q < 10; q++){
          if (row.indexOf(q) === -1){
            if (column.indexOf(q) === -1){
              if (cell.indexOf(q) === -1){
                arr[r][c] = q;
                if (solveSudoku(arr)){
                  return arr;
                }
                arr[r][c] = 0;
              }
            }
          }
        }
        // Backtrack
        return false;
      }
    }
  }
  // sudoku solved
  return true;
}

function makeCell(array,x,y){
  let rowStart, columnStart;
  let tempCell = [];
  if (x < 3) rowStart = 0;
  if (2 < x && x < 6) rowStart = 3;
  if (x > 5) rowStart = 6;
  if (y < 3) columnStart = 0;
  if (2 < y && y < 6) columnStart = 3;
  if (y > 5) columnStart = 6;
  for (let r = rowStart; r < rowStart + 3; r++){
    for (let c = columnStart; c < columnStart + 3; c++){
      tempCell.push(array[r][c]);
    }
  }
  return tempCell;
}