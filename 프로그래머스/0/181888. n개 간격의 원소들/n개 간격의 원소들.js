const solution = (num_list, n) => {
    let answer = [];
    
    for (let i = 0; i < num_list.length; i++) {
        if (i % n === 0) {
            answer.push(num_list[i])
        }
    }
    
    return answer;
}