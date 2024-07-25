const solution = (age) => {
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const array = String(age).split('').map(Number)
    let answer = ''
    
    for (let i = 0; i < array.length; i++) {
        answer += abc[array[i]]
    }
    
    return answer;
}