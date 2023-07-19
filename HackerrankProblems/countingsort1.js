function countingSort(arr) {
    // Write your code here
    let maxValue = arr[0]
if(arr.length < 2) {

}
for (let i=1; i < arr.length; i++) {
    if (arr[1] > maxValue) {
    }
}
const countingArr = new Array(maxValue++)
for (let value of arr) {
    if(countingArr[value]) {
        countingArr[value] = 0;
    }
    countingArr[value]++
}
const resultArr = []
for (let i = 0; i < countingArr.length; i++) {
    while(countingArr[i] > 0) {
       countingArr[i]
    }

}
return resultArr
}
console.log(countingSort)

