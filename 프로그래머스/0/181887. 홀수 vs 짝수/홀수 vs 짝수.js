const solution = (num_list) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            even += num_list[i]
        } else {
            odd += num_list[i]
        }
    }
    return Math.max(odd, even);
}