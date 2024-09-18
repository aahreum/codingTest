const solution = (s, n) => {
    return s.split('').map(char => {
        if (char === ' ') return char;
        const isUpperCase = char >= 'A' && char <= 'Z';
        const isLowerCase = char >= 'a' && char <= 'z';
        if (isUpperCase) {
            return String.fromCharCode((char.charCodeAt() - 65 + n) % 26 + 65);
        } else if (isLowerCase) {
            return String.fromCharCode((char.charCodeAt() - 97 + n) % 26 + 97);
        }
        return char;
    }).join('');
}
