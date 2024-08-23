const solution = (s) => {
    let array = s.split(' ');
    let answer = `${Math.min(...array)} ${Math.max(...array)}`
    return answer;
}