const solution = (i, j, k) => {
    let answer = 0;
    let array = []
    
    for (let idx = i; idx <= j; idx++) {
        array.push(idx)
    }
    
    return [...array.join('')].filter((el) => el === String(k)).length;
}