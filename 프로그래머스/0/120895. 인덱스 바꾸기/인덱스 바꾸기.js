const solution = (my_string, num1, num2) => {
    let array = [...my_string];
    array[num1] = my_string[num2];
    array[num2] = my_string[num1];
    
    return array.join('');
}