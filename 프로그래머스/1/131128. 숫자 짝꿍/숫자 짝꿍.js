const solution = (X, Y) => {
    let countX = Array(10).fill(0);
    let countY = Array(10).fill(0);

    for (let char of X) {
        countX[char]++;
    }
    
    for (let char of Y) {
        countY[char]++;
    }

    let result = [];

    for (let i = 9; i >= 0; i--) {
        let count = Math.min(countX[i], countY[i]);
        result.push(String(i).repeat(count));
    }

    let answer = result.join('');
    if (answer === '') return "-1";
    if (answer[0] === '0') return "0";

    return answer;
}