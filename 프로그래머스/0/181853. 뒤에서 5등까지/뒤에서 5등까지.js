const solution = (num_list) => {
    let answer = num_list.sort((a, b) => a - b).slice(0, 5);
    return answer;
}