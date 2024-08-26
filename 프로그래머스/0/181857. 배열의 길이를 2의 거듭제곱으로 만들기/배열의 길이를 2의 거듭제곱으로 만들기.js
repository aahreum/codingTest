const solution = (arr) => {
    let power = Math.pow(2, Math.ceil(Math.log2(arr.length)))
    if (arr.length === power) return arr;
    arr.push(...Array(power - arr.length).fill(0));
    return arr;
}