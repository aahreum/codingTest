const solution = (n) => {
    const pizza = 7;
    
    return n < 7 ? 1 : Math.ceil(n / pizza);
}