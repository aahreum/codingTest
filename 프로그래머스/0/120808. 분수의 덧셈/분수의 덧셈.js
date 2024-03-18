const getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a);

const solution = (numer1, denom1, numer2, denom2) => {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    let GCD = getGCD(numer, denom);
    
    return [numer / GCD, denom / GCD];
}