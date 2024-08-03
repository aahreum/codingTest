const solution = (myString, pat) => {
    let answer = myString.toLowerCase().indexOf(pat.toLowerCase()) !== -1 ? 1 : 0;
    return answer;
}