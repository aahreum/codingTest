const solution = (num_list) => {
    let answer = 0;
    num_list.forEach((num) => {
        while (num > 1) {
        if (num % 2 === 0) {
            num = num / 2
        } else {
            num = (num - 1) / 2
        }
        answer++
    }
    })
    return answer;
}