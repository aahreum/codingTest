const solution = (num_list, n) => {
    let array = num_list.slice(0, n);
    num_list.splice(0, n)
    num_list.push(...array)
    return num_list;
}