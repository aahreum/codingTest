const solution = (num, k) => {
    let answer = [...String(num)].indexOf(String(k));
    return answer === -1 ? answer : answer + 1;
}