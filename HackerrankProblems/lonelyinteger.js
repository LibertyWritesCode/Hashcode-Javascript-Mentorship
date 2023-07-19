function lonelyinteger(a) {
    // Write your code here

    let lonelyInt = 0;
    for (let i = 0; i < a.length; i++) {
        lonelyInt ^= a[i];
    }
    return lonelyInt;
}