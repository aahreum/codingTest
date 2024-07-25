const solution = (dot) => {
    const x = dot[0];
    const y = dot[1];
    let answer = x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4
    
    return answer;
}

// 참고
// const solution = (dot) => {
//     const [num,num2] = dot;
//     const check = num * num2 > 0;
//     return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
// }