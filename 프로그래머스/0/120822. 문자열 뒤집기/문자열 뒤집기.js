const solution = (my_string) => {
    let array = my_string.split('');
    let answer = array.reverse().join('')
       
    return answer;
}