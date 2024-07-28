const solution = (n) => {
    let answer = [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);
    return answer;
}