const solution = (s) => {
    let count = 0;
    let zeroCount = 0;
    
    while (s !== '1') {
        zeroCount += [...s].filter(el => el === '0').length;
        s = s.replaceAll('0', '').length.toString(2);
        count++;
    }
    
    return [count, zeroCount];
}