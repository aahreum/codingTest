const solution = (num_list) => {
    let odd = num_list.filter((el) => el % 2 === 1).join('')
    let even = num_list.filter((el) => el % 2 === 0).join('')
    
    return Number(odd) + Number(even);
}