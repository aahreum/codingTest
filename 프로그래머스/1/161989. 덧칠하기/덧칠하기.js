const solution = (n, m, section) => {
    let answer = 0;
    let current = 0;
    
    for (let s of section) {
        if (s > current) {
            answer++;
            current = s + m - 1; 
        }
    }
    
    return answer;
};