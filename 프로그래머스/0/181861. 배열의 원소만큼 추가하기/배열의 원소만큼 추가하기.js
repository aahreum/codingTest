const solution = (arr) => {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        answer.push(...Array(arr[i]).fill(arr[i]));
    }
    return answer;
}