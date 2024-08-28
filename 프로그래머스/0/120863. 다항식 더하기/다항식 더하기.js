const solution = (polynomial) => {
    let array = polynomial.split(' + ')
    let valX = 0;
    let val = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes('x')) {
            valX += array[i].split('x')[0] !== '' ? +array[i].split('x')[0] : 1;
        } else {
            val += +array[i]
        }
    }
    
    let result = [];
    if (valX !== 0) {
        result.push(valX === 1 ? 'x' : `${valX}x`);
    }
    if (val !== 0) {
        result.push(`${val}`);
    }
    return result.length > 0 ? result.join(' + ') : '0';
}