const solution = (babbling) => {
    let answer = 0;
    let reg = /^(?!.*(aya|ye|woo|ma)\1)(aya|ye|woo|ma)+$/;
    babbling.forEach((b) => {
        if (reg.test(b)) {
            answer++;
        }
    })
    return answer;
}