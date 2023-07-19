/* function diagonalDifference(arr) {
    // Write your code here
    let leftSum = 0;
    let rightSum = 0;
    let n = arr.length;


for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i]
}

for (let j = 0; j < arr; j++) {
    rightSum += arr[i][j]
}

let difference = leftSum - rightSum;
console.log(difference);
}

*/

function diagonalDifference(arr) {
    // Write your code here
    let leftSum = 0;
    let rightSum = 0;


for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i]

const j = arr.length - 1 - i;
    rightSum += arr[i][j]
}

return Math.abs(leftSum - rightSum);

}

 
