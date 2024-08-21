const solution = (s) => {
    return [...s].sort((a, b) => {
        if (a.toLowerCase() === b.toLowerCase()) {
            return a > b ? -1 : 1;
        }
        
        return a > b ? -1 : 1;
    }).join('');
}