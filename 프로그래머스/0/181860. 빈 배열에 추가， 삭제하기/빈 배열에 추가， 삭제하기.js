const solution = (arr, flag) => {
    let answer = [];
    
    for (let i = 0; i < flag.length; i++) {
        if (flag[i]) {
            answer.push(...Array(arr[i] * 2).fill(arr[i]))
        } else {
            answer.splice(-arr[i], arr[i])
        }
    }
    
    return answer;
}