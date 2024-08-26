const solution = (strArr) => {
    let map = {};
    
    strArr.forEach((s) => {
        if (map[s.length]) {
            map[s.length]++;
        } else {
            map[s.length] = 1;
        }
    })
    
    return Math.max(...Object.values(map))
}