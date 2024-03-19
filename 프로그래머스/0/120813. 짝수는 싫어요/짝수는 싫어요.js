const sort = (array) => {
    return array.sort((a, b) => a - b);
}

const solution = (n) => {
    let answer = [];
    
    if (n % 2 === 0) {
        n--;
        answer.push(n)
        while (n > 1) {
            n -= 2;
            answer.push(n)
        }
        return sort(answer);
        
    } else if (n % 2 === 1) {
        answer.push(n)
           while (n > 1) {
            n -= 2;
            answer.push(n)
        }
        return sort(answer);
    }
}