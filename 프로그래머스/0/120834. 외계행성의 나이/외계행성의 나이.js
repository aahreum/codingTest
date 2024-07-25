const solution = (age) => {
    const abc = 'abcdefghij';
    let answer = ''
    
    for (let i = 0; i < String(age).length; i++) {
        answer += abc[String(age)[i]]
    }
    
    return answer;
}