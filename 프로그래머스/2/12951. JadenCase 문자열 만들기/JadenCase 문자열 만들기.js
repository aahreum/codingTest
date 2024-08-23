const solution = (s) => {
    let answer = s.split(' ').map((el) => {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    });
    return answer.join(' ');
}