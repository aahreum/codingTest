const solution = (arr, k) => {
    let answer = [...new Set(arr)].slice(0, k);
    let fillArr = new Array(k - answer.length).fill(-1);
    return answer.concat(fillArr);
}