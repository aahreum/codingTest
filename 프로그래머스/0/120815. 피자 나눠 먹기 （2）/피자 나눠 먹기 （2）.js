const getGCD = (a, b) => {
    return b > 0 ? getGCD(b, (a % b)) : a;
}

const getLCM = (a, b) => {
    return (a * b) / getGCD(a, b);
}

const solution = (n) => {
    const pizza = 6;
    
    return getLCM(n, pizza) / pizza;
}