const solution = (k, m, score) => {
    let array = [];
    let min = [];

    score.sort((a, b) => b - a);
    for (let i = 0; i < score.length; i+= m) {
        let slice = score.slice(i, i + m);
        if (slice.length === m) {
          array.push(slice);
        }
    }
    array.forEach((el) => {
        min.push(Math.min(...el));
    })

    return min.reduce((acc, curr) => acc + curr * m, 0);
}