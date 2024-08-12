const solution = (arr, intervals) => {
    let [a, b] = intervals;
    return arr.slice(a[0], a[1] + 1).concat(arr.slice(b[0], b[1] + 1));
}