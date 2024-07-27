const solution = (my_string) => {
    let answer = new Set(my_string);
    return [...answer].join('');
}