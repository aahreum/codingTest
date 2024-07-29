const solution = (s1, s2) => {
    let map = {};
    let arr = s1.concat(s2);
    arr.forEach((el) => map[el] = (map[el] || 0) + 1);
    
    return [...new Set(arr.filter((el) => map[el] !== 1))].length;
}