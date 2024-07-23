const solution = (array) => {
    let max = Math.max(...array);
    let index = array.indexOf(max)
    return [max, index]
}