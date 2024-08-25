const solution = (myString, pat) => {
    let answer = 0;
    let i = myString.indexOf(pat);
    
    while (i !== -1) {
        answer++;
        i = myString.indexOf(pat, i + 1)
    }
    
    return answer;
}