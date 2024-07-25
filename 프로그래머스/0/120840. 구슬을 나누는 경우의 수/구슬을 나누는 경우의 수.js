const solution = (balls, share) => {
    let answer = 1;
    
    while (share > 0) {
        answer *= balls / share;
        balls--;
        share--;
    }
    
    return Math.round(answer);
}