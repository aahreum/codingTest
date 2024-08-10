const solution = (n) => {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        answer.push(Array(n).fill(0))
        answer[i][i] = 1
    }
    
    return answer;
}