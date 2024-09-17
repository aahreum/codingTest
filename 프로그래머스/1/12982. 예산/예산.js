const solution = (d, budget) => {
    let answer = 0;
    let sum = 0;
    
    d.sort((a, b) => a - b).forEach((el) => {
        if (sum + el <= budget) {
            sum += el;
            answer++;
        }
    })
    return answer;
}
