const solution = (t, p) => {
    let answer = 0;
    for (let i = 0; i < t.length; i++) {
        let s = t.slice(i, i + p.length)
        if (s.length === p.length && Number(s) <= Number(p)) {
            answer++;
        }   
    }
    return answer;
}