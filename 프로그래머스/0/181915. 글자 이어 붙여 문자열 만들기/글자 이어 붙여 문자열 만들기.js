const solution = (my_string, index_list) => {
    let answer = index_list.map((el) => my_string[el]).join('');

    return answer;
}