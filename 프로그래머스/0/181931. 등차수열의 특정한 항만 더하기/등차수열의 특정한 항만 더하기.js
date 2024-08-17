const solution = (a, d, included) => {
    let array = new Array(included.length).fill(a).map((n, i) => n + i * d);
    return array.filter((_, i) => included[i]).reduce((acc, curr) => acc + curr, 0);
}