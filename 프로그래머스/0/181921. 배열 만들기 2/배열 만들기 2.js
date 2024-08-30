const solution = (l, r) => {
    let answer = [];
    
    for (let i = l; i <= r; i++) {
        if (/^[05]+$/.test(i.toString())) {
            answer.push(i);
        }
    }
    
    return answer.length ? answer : [-1];
}