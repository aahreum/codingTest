const solution = (str_list, ex) => {
    let answer = [];
    for (let i = 0; i < str_list.length; i++) {
        !str_list[i].includes(ex) && answer.push(str_list[i])
    }
    return answer.join('');
}