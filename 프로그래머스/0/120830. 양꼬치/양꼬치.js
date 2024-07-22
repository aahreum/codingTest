const solution = (n, k) => {
    let answer = 12000 * n + 2000 * (k - Math.floor(n / 10));
    return answer;
}