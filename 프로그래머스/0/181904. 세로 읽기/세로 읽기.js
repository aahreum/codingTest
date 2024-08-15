const solution = (my_string, m, c) => {
    let array = [...my_string];
    let answer = [];
    for (let i = c - 1; i < my_string.length; i+=m) {
        answer.push(my_string[i])
    }
    return answer.join('');
}