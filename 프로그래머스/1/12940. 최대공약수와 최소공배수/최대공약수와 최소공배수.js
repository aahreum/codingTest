const solution = (n, m) => {
    const gcd = (a, b) => a % b ? gcd(b, a % b) : b;
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(n, m), lcm(n, m)];
}