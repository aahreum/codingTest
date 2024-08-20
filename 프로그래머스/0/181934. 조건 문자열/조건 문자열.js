const solution = (ineq, eq, n, m) => {
    const operator = ineq + eq;
    if (operator === '>=') {
        return +(n >= m);
    } else if (operator === '<=') {
        return +(n <= m);
    } else if (operator === '>!') {
        return +(n > m);
    } else if (operator === '<!') {
        return +(n < m);
    }
}