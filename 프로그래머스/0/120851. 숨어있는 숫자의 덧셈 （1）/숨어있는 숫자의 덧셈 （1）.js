const solution = (my_string) => {
    let num = my_string.replace(/[a-z, A-Z]/g, '');
    let answer = num.split('').map(Number).reduce((acc, cur) => {
        return acc + cur;
    }, 0)
    return answer;
}