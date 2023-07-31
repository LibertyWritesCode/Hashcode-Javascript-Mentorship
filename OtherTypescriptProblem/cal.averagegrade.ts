/*
Write a TypeScript function that takes an array of student grades as input and 
calculates the average grade for the class.

Input:

An array of numbers representing the student grades. 
Each grade is a floating-point number between 0 and 100.
Output:

A single number representing the average grade of the class, rounded to two decimal places.
*/

function calculateAverageGrade(grades: number[]): number {
    if (grades.length === 0) {
      return 0; // Return 0 for an empty array to avoid division by zero.
    }
  
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    return parseFloat(average.toFixed(2)); // Round the average to two decimal places.
  }
  
  // Test the function
  const grades: number[] = [78, 92, 85, 90, 88];
  const average = calculateAverageGrade(grades);
  console.log(average); 
  