const solution = (quiz) => {
    let answer = [];
    quiz.forEach((el) => {
        let [a, op, b, eq, res] = el.split(' ');
        let val = op === '+' ? +a + +b : +a - +b;
        val === +res ? answer.push('O') : answer.push('X');
    })
    return answer;
}