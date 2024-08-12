const solution = (binomial) => {
    let [a, op, b] = binomial.split(' ');
    let answer = op === '+' ? Number(a) + Number(b) : op === '-' ? Number(a) - Number(b) : Number(a) * Number(b);
    return answer;
}