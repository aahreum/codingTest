const solution = (n) => {
    let a = 0, b = 1, sum;
    
    for (let i = 2; i <= n; i++) {
        sum = (a + b) % 1234567;
        a = b;
        b = sum;
    }
    
    return b;
}