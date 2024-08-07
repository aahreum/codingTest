const solution = (arr, delete_list) => {
    let answer = arr.filter((el) => !delete_list.includes(el));
    return answer;
}