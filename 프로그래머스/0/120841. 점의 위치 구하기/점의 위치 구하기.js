const solution = (dot) => {
    const x = dot[0];
    const y = dot[1];
    let answer = x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4
    
    return answer;
}