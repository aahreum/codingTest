const solution = (num_str) => {
    let answer = [...num_str].map(Number).reduce((acc, cur) => acc + cur, 0);
    return answer;
}