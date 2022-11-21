// In each input array, every number repeats at least once,
//  except for two. Write a function that returns the two unique 
// numbers.

// Examples
// returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
// Notes
// Keep the same ordering in the output.

const returnUnique = (array) =>{

let duplicateItems = array.filter((item,index)=>array.indexOf(item) !== index);
let uniqueArray =array.filter((item) => duplicateItems.indexOf(item)===-1)
return uniqueArray;

}

console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]))
console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]))
console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]))