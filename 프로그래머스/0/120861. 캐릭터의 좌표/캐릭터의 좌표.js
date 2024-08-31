const solution = (keyinput, board) => {
    let answer = [0, 0];
    let max = [Math.floor(board[0] / 2), Math.floor(board[1] / 2) ]
    const moves = {
        'left': [-1, 0],
        'right': [1, 0],
        'up': [0, 1],
        'down': [0, -1]
    };
    keyinput.forEach(key => {
        answer[0] += moves[key][0];
        answer[1] += moves[key][1];

        answer[0] = Math.max(Math.min(answer[0], max[0]), -max[0]);
        answer[1] = Math.max(Math.min(answer[1], max[1]), -max[1]);
    });
    return answer;
}