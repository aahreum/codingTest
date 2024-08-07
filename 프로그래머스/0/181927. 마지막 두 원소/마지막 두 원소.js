const solution = (num_list) => {
    let a = num_list[num_list.length - 2]
    let b = num_list[num_list.length - 1]
    a < b ? num_list.push(b - a) : num_list.push(b * 2);
    return num_list;
}