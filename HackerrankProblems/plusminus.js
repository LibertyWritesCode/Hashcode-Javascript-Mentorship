function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zeros = 0;
    let n = arr.length;

    for (let i=0; i < n; i++) {
        
    if (arr[i] > 0) {
        pos++

    } else if (arr[i] < 0) {
        neg++

    } else {
        zeros++

    }

}
    let positiveSum = pos / n;
    let negativeSum = neg / n;
    let zeroSum = zeros / n;

    console.log(positiveSum);
    console.log(negativeSum);
    console.log(zeroSum);

}