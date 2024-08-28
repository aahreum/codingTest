const solution = (my_string) => {
    let array = my_string.split(' ');
    let answer = Number(array[0]);
    for (let i = 1; i < array.length; i++) {
        if (array[i] === '+') {
            answer += Number(array[i + 1]);
        } else if (array[i] === '-') {
            answer -= Number(array[i + 1]);
        }
    }
    return answer;
}
