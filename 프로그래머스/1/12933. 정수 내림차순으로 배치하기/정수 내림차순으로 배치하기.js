const solution = (n) => {
    let answer = [...String(n)].sort((a, b) => b - a).join('');
    return Number(answer);
}