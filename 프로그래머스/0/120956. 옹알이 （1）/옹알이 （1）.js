const solution = (babbling) => {
    let answer = 0;
    let reg = /^(aya|ye|woo|ma)+$/;
    babbling.forEach((word) => {
        if (reg.test(word)) {
            answer++
        }
    })
    return answer;
}