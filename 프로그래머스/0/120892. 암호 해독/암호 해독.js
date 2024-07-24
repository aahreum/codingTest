const solution = (cipher, code) => {
    let array = [...cipher]
    let answer = ''
    
    for (let i = code; i <= array.length; i++) {
        if ((i % code) === 0) {
         answer += array[i - 1]   
        }
    }
    
    return answer;
}