const solution = (arr, n) => {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr.length % 2 !== 0 && i % 2 === 0) || (arr.length % 2 === 0 && i % 2 !== 0)) {
            answer.push(arr[i] + n);
        } else {
            answer.push(arr[i]);
        }
    }
    return answer
}