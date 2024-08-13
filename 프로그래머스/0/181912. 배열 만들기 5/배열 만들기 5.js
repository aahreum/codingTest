const solution = (intStrs, k, s, l) => {
    let answer = [];
    for (let i = 0; i < intStrs.length; i++) {
        if (k < Number(intStrs[i].substring(s).substring(0, l))) {
            answer.push(Number(intStrs[i].substring(s).substring(0, l)))
        }
    }
    return answer;
}