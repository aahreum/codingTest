const solution = (picture, k) => {
    let answer = [];
    for (let i = 0; i < picture.length; i++) {
        let expanded = picture[i].replace(/./g, c => c.repeat(k))
        for (let j = 0; j < k; j++) {
            answer.push(expanded)
        }
    }
    return answer;
}