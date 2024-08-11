const solution = (myString, pat) => {
    let arr = [...myString]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            arr[i] = 'B'
        } else {
            arr[i] = 'A'
        }
    }
    return +arr.join('').includes(pat);
}