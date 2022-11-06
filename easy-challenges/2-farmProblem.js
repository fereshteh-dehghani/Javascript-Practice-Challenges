// In this challenge, a farmer is asking you to tell him how many legs can 
// be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species.
//  You have to implement a function that returns the total number of legs of all the animals.

// Examples
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50
// animals(chickens, cows, pigs).













// function animals(chickens, cows, pigs){
//      let chickensLegs =0;
//      let cowsLegs=0;
//      let pigsLegs=0;
//      let result =0;

//     if( !isNaN(chickens) && !isNaN(cows)  && !isNaN(pigs) ){
//         chickensLegs=chickens *2 ;
//         cowsLegs=cows*4;
//         pigsLegs= pigs *4;
//      result = chickensLegs+cowsLegs+pigsLegs;
//     }else{
      
//      result='P.L.Z Enter Number for animals legs';
//     }
//     console.log( result);
// }

// animals(0,'l',3);