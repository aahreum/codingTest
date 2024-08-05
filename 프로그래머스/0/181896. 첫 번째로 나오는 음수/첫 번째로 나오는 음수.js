const solution = (num_list) => {
    let array = num_list.filter((el) => el < 0);
    let answer = num_list.indexOf(array[0])
    return answer;
}