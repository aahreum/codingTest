const solution = (s) => {
    let array = s.split(' ')
    
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === 'Z') {
            if (i > 0) {
                array.splice(i - 1, 2);
            }
        }
    }
    
    let answer = array.map(Number).reduce((acc, cur) => acc + cur, 0)
    
    return answer;
}