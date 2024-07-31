const solution = (array, n) => {
    let minDiff = Infinity;
    let answer = 0;
    
    for (let i = 0; i < array.length; i++) {
        let diff = Math.abs(n - array[i])
        
        if (diff < minDiff) {
            minDiff = diff;
            answer = array[i]
        } else if (diff === minDiff && array[i] < answer) {
            answer = array[i]
        }
    } 
    
    return answer;
}