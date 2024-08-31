const solution = (dots) => {
    const xVal = dots.map((el) => el[0]);
    const yVal = dots.map((el) => el[1]);
    const x = Math.max(...xVal) - Math.min(...xVal);
    const y = Math.max(...yVal) - Math.min(...yVal);
    return x * y;
}