function towerBreakers(n, m) {
    // Write your code here

       if (n === 1 || m === 1) {
        return 2;
    }
    
    if (n % 2 === 0 || m === 2) {
        return 2;
    }
    return 1;

}