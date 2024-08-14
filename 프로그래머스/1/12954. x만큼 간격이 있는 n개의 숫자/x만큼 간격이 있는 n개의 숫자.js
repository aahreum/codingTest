const solution = (x, n) => {
    let answer = Array(n).fill(0);
    for (let i = 0; i < answer.length; i++) {
        answer[i] = x * (i + 1)
    }
    return answer;
}