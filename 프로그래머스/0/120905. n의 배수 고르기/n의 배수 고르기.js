const solution = (n, numlist) => {
    let array = [];
    for (let i = 0; i <= numlist.length; i++) {
        if (numlist[i] % n === 0) {
            array.push(numlist[i]);
        }
    }
    return array;
}