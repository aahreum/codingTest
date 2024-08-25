const solution = (code) => {
    let ret = '';
    let mode = 0;
    for (let i = 0; i < code.length; i++) {
        if (mode === 0) {
            if (i % 2 === 0 && code[i] !== '1') {
                ret += code[i]
            } else if (code[i] === '1') {
                mode = 1;
            }
        } else {
            if (i % 2 !== 0 && code[i] !== '1') {
                ret += code[i]
            } else if (code[i] === '1') {
                mode = 0;
            }
        }
    }
    
    return ret.length === 0 ? 'EMPTY' : ret
}