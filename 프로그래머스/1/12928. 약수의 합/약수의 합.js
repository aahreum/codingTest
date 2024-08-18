const solution = (n) => {
    let array = [];
    
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            array.push(i)
        }
    }
    
    return array.reduce((acc, curr) => acc + curr, 0);
}