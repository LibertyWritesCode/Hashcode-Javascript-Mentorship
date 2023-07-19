function miniMaxSum(arr) {
    // Write your code here
    let maxSum = arr[0];
    let minSum = arr[0];
    let totalSum = 0;
    

for (let i = 0; i < 5; i++) {
    if (maxSum < arr[i]) {
        maxSum = arr[i]; 
   }
   
    if (minSum > arr[i]) {
      minSum = arr[i];
      
    } 
        totalSum += arr[i];
    
  }
let maximumSum = totalSum - minSum;
let minimumSum = totalSum - maxSum;
console.log(minimumSum + ' ' + maximumSum);
}