const solution = (absolutes, signs) => {
    return absolutes.reduce((acc, curr, i) => signs[i] ? acc + curr : acc + (-curr), 0);
}