const solution = (k, score) => {
    let answer = [];
    let hall = [];
    
    for (let i = 0; i < score.length; i++) {
        if (hall.length < k) {
            hall.push(score[i]);
        } else {
            let minIdx = hall.indexOf(Math.min(...hall));
            if (score[i] > hall[minIdx]) {
                hall[minIdx] = score[i];
            }
        }
        answer.push(Math.min(...hall));
    }
    
    return answer;
}