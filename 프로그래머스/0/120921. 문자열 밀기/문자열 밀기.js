const solution = (A, B) => {
    let arr = [...A]
    let answer = -1;
    
    if (A === B) return 0
    
    for (let i = 0; i < arr.length; i++) {
        arr.unshift(arr.pop())
        if (arr.join('') === B) {
            return answer = i + 1
        }
    }
    
    return answer;
}