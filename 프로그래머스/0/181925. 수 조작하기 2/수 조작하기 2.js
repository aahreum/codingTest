const solution = (numLog) => {
    let answer = '';
    for (let i = 1; i < numLog.length; i++) {
        if (numLog[i - 1] + 1 === numLog[i]) {
            answer += 'w'
        } else if (numLog[i - 1] - 1 === numLog[i]) {
            answer += 's'
        } else if (numLog[i - 1] + 10 === numLog[i]) {
            answer += 'd'
        } else {
            answer += 'a'
        }
    }
    return answer;
}