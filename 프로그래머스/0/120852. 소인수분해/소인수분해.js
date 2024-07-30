const solution = (n) => {
    let answer = [];
    
    for (let i = 2; i <= n; i++) {
       while (n % i === 0) {
           answer.push(i);
           n /= i;
       }
    }
    
    return [...new Set(answer)];
}