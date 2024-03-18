const solution = (array) => {
    let answer = array.sort((a, b) => (a - b))
    let index = Math.floor(answer.length / 2)
    return answer[index];
}