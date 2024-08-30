const solution = (sides) => {
    const [a, b] = sides;
    const max = a + b - 1;
    const min = Math.abs(a - b) + 1;
    
    return max - min + 1;
}