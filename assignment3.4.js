/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

function num(a, b) {
    if (b === 0) {
      return a;
    } else {
      return num(b, a % b);
    }
  }
  
  function numTwo(a, b) {
    return ;
  }
  
  let smallestMultiple = 1;
  
  for (let x = 2; x <= 20; x++) {
     smallestMultiple
  }
  
  console.log(); 
  