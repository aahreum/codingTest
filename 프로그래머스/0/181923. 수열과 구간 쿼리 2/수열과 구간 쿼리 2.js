const solution = (arr, queries) => {
    let answer = [];
    queries.forEach(([s, e, k]) => {
        let min = Infinity;
        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        }
        answer.push(min === Infinity ? -1 : min);
    });
    
    return answer;
}