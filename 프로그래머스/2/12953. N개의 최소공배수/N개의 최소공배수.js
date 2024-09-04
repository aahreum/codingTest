const solution = (arr) => {
    const gcd = (a, b) => a % b ? gcd(b, a % b) : b;
    const lcm = (a, b) => a * b / gcd(a, b);
    return arr.reduce((acc, cur) => lcm(acc, cur));
}