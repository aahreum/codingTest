const solution = (n) => {
    let arr = [];
    let num = 1;
    while (arr.length < n) {
        if (num % 3 !== 0 && !num.toString().includes('3')) {
            arr.push(num);
        }
        num++;
    }
    return arr[arr.length - 1];
}