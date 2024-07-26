const solution = (n) => {
    let answer = Math.sqrt(n);
    return Number.isInteger(answer) ? 1 : 2;
}