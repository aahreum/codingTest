const solution = (a, b) => {
    let gcd = (a, b) => b ? gcd(b, a % b) : a;
    let divisor = gcd(a, b);
    b /= divisor;
    
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;
    
    return b === 1 ? 1 : 2;
}