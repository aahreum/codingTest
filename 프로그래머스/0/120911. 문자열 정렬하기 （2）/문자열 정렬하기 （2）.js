const solution = (my_string) => {
    let answer = [...my_string.toLowerCase()].sort().join('');
    return answer;
}