const solution = (my_string) => {
    let answer = my_string.split(' ').filter((el) => el !== '')
    return answer;
}