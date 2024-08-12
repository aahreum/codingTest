const solution = (myString) => {
    let arr = myString.split('x');
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        answer.push(arr[i].length)
    } 
    return answer;
}