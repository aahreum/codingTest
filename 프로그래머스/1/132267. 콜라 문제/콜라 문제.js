const solution = (a, b, n) => {
    let answer = 0; 
    while (n >= a) {
        let div = Math.floor(n / a);
        answer += div * b;
        n = (div * b) + (n % a);
    }
    return answer;
}