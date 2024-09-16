const solution = (number, limit, power) => {
    let knight = [];
    const divisorCount = (n) => {
        let count = 1;
        let div = 2;
        while (div * div <= n) {
            let exp = 0;
            while (n % div === 0) {
                n /= div;
                exp++;
            }
            count *= (exp + 1);
            div++;
        }
        if (n > 1) {
            count *= 2;
        }
        return count;
    }
        
    for (let i = 1; i <= number; i++) {
        let sum = divisorCount(i);
        knight.push(sum);
    }
    return knight.reduce((acc, curr) => acc + (curr > limit ? power : curr), 0);
}