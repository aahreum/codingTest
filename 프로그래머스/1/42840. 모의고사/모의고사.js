const solution = (answers) => {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let score = [0, 0, 0];
    answers.forEach((a, idx) => {
        if (a === first[idx % first.length]) score[0]++;
        if (a === second[idx % second.length]) score[1]++;
        if (a === third[idx % third.length]) score[2]++;
    })
    const maxScore = Math.max(...score);
    return score.map((s, idx) => (s === maxScore ? idx + 1: null)).filter(el => el !== null);
}