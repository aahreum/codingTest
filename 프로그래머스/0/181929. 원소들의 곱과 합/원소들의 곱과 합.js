const solution = (num_list) => {
    let mult = num_list.reduce((acc, cur) => acc * cur, 1)
    let sum = num_list.reduce((acc, cur) => acc + cur, 0)
    return mult > sum * sum ? 0 : 1;
}