const solution = (s) => {
    return s.split(' ').map((w) => [...w].map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')).join(' ')
}