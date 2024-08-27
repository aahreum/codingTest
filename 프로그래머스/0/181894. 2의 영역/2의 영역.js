const solution = (arr) => {
    let s = arr.indexOf(2)
    let e = arr.lastIndexOf(2)
    let answer = arr.slice(s, e + 1);
    return answer.length ? answer : [-1];
}