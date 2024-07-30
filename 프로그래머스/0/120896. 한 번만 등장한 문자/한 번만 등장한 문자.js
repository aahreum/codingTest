const solution = (s) => {
    let map = {};
    let arr = [...s];
    arr.forEach((el) => map[el] = (map[el] || 0) + 1);
    
    return arr.filter((el) => map[el] === 1).sort().join('')
}