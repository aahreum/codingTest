const solution = (arr) => {
    let answer = 0;
    const transform = (arr) => {
        return arr.map(x => {
            if (x >= 50 && x % 2 === 0) {
                return x / 2;
            } else if (x < 50 && x % 2 !== 0) {
                return x * 2 + 1;
            } else {
                return x; 
            }
        });
    };
    let curr = arr;
    let next = transform(arr);
    
    while (JSON.stringify(curr) !== JSON.stringify(next)) {
        curr = next;
        next = transform(curr);
        answer++;
    }
    
    return answer;
}