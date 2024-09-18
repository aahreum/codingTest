const solution = (s, n) => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    
    return [...s].map(char => {
        if (char === ' ') return char;

        if (upper.includes(char)) {
            let index = (upper.indexOf(char) + n) % 26;
            return upper[index];
        }

        if (lower.includes(char)) {
            let index = (lower.indexOf(char) + n) % 26;
            return lower[index];
        }

        return char;
    }).join('');
}
