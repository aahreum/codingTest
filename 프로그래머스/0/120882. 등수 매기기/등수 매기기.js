const solution = (score) => {
    let average = score.map((el) => (el[0] + el[1]) / 2);
    let sort = average.slice().sort((a, b) => b - a);
    
    return average.map((el) => sort.indexOf(el) + 1);
}