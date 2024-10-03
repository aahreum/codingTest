const solution = (k, tangerine) => {
    let map = new Map();
    tangerine.forEach(size => {
        map.set(size, (map.get(size) || 0) + 1);
    });

    let sorted = [...map.values()].sort((a, b) => b - a);

    let count = 0;
    for (let s of sorted) {
        k -= s;
        count++;
        if (k <= 0) break;
    }

    return count;
}
