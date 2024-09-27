const solution = (clothes) => {
    let answer = 0;
    let obj = clothes.reduce((acc, [value, key]) => {
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(value);
        return acc;
    }, {})
    let set = Object.values(obj).reduce((acc, arr) => {
        return acc * (arr.length + 1);
    }, 1);
    
    return set - 1;
}