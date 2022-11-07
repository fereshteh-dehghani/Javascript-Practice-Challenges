// Write a function that moves all the zeroes to the end of an array. 
// Do this without returning a copy of the input array.

// Examples
// zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

// zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

// zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

// zeroesToEnd([0, 0]) ➞ [0, 0]
// Notes
// You must mutate the original array.
// Keep the relative order of the non-zero elements the same.











function zeroesToEnd(numbers) {
    const nonZeroNumbers = numbers.filter((num) => num !== 0);
    const zeroNumbers = numbers.filter((num) => num === 0);
    const newNumbers= [...nonZeroNumbers];
    return newNumbers.concat(zeroNumbers);
    
}

console.log(zeroesToEnd([1, 0, 0,6, 0, 0,0, 5]));
console.log(zeroesToEnd([0, 0, 0]));


