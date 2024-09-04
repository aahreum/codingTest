const solution = (n) => {
    const count = (b) => {
        return [...b].filter((bit) => bit === '1').length;
    }
    let nBinary = count(n.toString(2));
    let i = 1;
    while (true) {
        let answer = n + i;
        let binary = count(answer.toString(2));  
        if (nBinary === binary) {
            return answer;
        }
        i++;
    }
}