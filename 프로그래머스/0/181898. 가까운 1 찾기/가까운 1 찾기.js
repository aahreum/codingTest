const solution = (arr, idx) => {
    let answer = arr.slice(idx).includes(1) ? arr.slice(idx).indexOf(1) + idx : -1;
    return answer;
}