const solution = (before, after) => {
    let answer = [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
    return answer;
}