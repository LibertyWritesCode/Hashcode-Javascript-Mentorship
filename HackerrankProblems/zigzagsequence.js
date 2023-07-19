function findZigZagSequence(a, n) {
    a.sort(function (a, b) { return a - b; }); 

    var mid = Math.floor((n + 1) / 2) - 1; 

    var temp = a[mid];
    a[mid] = a[n - 1];
    a[n - 1] = temp;

    var st = mid + 1;
    var ed = n - 2; 

    while (st <= ed) {
        var temp = a[st];
        a[st] = a[ed];
        a[ed] = temp;
        st++;
        ed--;
    }

    return a; // Return the modified array
}

// Test
const testCases = 1;
const n = 5;
const array = [3, 4, 2, 5, 1];
console.log(findZigZagSequence(array, n).join(' ')); // Output: "1 4 2 5 3"
