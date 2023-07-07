/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

let number = 600851475143;
let anyFactor = 13;
let firstPrimeFactor = 1;

while (number > 1) {
  if (number % anyFactor === 0) {
    firstPrimeFactor = anyFactor;
    number = number / anyFactor;
  } else {
    anyFactor += 1;
  }
}

console.log(firstPrimeFactor); 
