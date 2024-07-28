const solution = (my_string) => {
    let answer = [...my_string.replace(/[a-z]/g, '')].map(Number).sort((a, b) => a - b)
    return answer;
}