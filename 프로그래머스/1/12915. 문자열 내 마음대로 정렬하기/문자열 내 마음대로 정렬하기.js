const solution = (strings, n) => {
    let answer = strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return a.localeCompare(b);
        } else {
            return a[n].localeCompare(b[n])
        }
    });
    return answer;
}