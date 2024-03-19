const solution = (array) => {
    const counter = array.reduce((acc, curr) => ({
        ...acc, [curr]: (acc[curr] || 0) +1
    }), {})
    
    const mode = Object.keys(counter).sort((a, b) => counter[b] - counter[a])
    
    return counter[mode[0]] === counter[mode[1]] ? -1 : Number(mode[0]);
}