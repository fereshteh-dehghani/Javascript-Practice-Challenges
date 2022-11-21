// This challenge is based on the game Minesweeper.

// Create a function that takes a grid of # and -, where each hash (#) 
// represents a mine and each dash (-) represents a mine-free spot. 
// Return an array where each dash is replaced by a digit indicating the number
//  of mines immediately adjacent to the spot (horizontally, vertically, and diagonally).

// Examples
// numGrid([
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "#", "-", "-"],
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-"]
// ]) ➞ [
//   ["0", "0", "0", "0", "0"],
//   ["0", "1", "1", "1", "0"],
//   ["0", "1", "#", "1", "0"],
//   ["0", "1", "1", "1", "0"],
//   ["0", "0", "0", "0", "0"],
// ]

// numGrid([
//   ["-", "-", "-", "-", "#"],
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "#", "-", "-"],
//   ["-", "-", "-", "-", "-"],
//   ["#", "-", "-", "-", "-"]
// ]) ➞ [
//   ["0", "0", "0", "1", "#"],
//   ["0", "1", "1", "2", "1"],
//   ["0", "1", "#", "1", "0"],
//   ["1", "2", "1", "1", "0"],
//   ["#", "1", "0", "0", "0"]
// ]

// numGrid([
//   ["-", "-", "-", "#", "#"],
//   ["-", "#", "-", "-", "-"],
//   ["-", "-", "#", "-", "-"],
//   ["-", "#", "#", "-", "-"],
//   ["-", "-", "-", "-", "-"]
// ]) ➞ [
//   ["1", "1", "2", "#", "#"],
//   ["1", "#", "3", "3", "2"],
//   ["2", "4", "#", "2", "0"],
//   ["1", "#", "#", "2", "0"],
//   ["1", "2", "2", "1", "0"],
// ]
// Notes
// N/A

const changeGrid = (array) => {
    const changearrayToNumber = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] !== "#") {
                array[i][j] = 0;
            }
        }
    }
    return array;
}
const numGrid = (array) =>{
let numArr= changeGrid(array);
for(let i=0;i<numArr.length;i++){
    for(let j=0;j<numArr[i].length;j++){
        if(numArr[i][j]!=="#"){
            if(numArr[i][j+1]==="#") numArr[i][j] +=1;
            if(numArr[i][j-1]==="#") numArr[i][j] +=1;
            if(i>1 && numArr[i-1][j-1]==="#") numArr[i][j] +=1;
            if(i<numArr.length-1 && numArr[i+1][j-1]==="#") numArr[i][j] +=1;
            if(i<numArr.length-1 && numArr[i+1][j+1]==="#") numArr[i][j] +=1;
            // if(i<numArr.length-1 && numArr[i+1][j+1]==="#") numArr[i][j] +=1;
            if(i<numArr.length-1 && numArr[i+1][j]==="#") numArr[i][j] +=1;
            if(i>=1 && numArr[i-1][j]==="#") numArr[i][j] +=1;
            if(i>=1 && numArr[i-1][j+1]==="#") numArr[i][j] +=1;        }
       
    }
}
return numArr
}

console.log(numGrid([
    ["-", "-", "-", "#", "#"],
    ["-", "#", "-", "-", "-"],
    ["-", "-", "#", "-", "-"],
    ["-", "#", "#", "-", "-"],
    ["-", "-", "-", "-", "-"]
]))