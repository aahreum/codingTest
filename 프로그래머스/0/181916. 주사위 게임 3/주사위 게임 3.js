const solution = (a, b, c, d) => {
    const counts = {};
    [a, b, c, d].forEach((num) => counts[num] = (counts[num] || 0) + 1);
    const val = Object.values(counts);
    const keys = Object.keys(counts).map(Number);
    if (val.includes(4)) {
        return 1111 * a;
    } else if (val.includes(3)) {
        let p = keys.find(key => counts[key] === 3);
        let q = keys.find(key => counts[key] === 1);
        return Math.pow(10 * p + q, 2);
    } else if (val.includes(2)) {
        let two = keys.filter(key => counts[key] === 2);
        if (two.length === 2) {
            return (two[0] + two[1]) * Math.abs(two[0] - two[1]);
        } else {
            let one = keys.filter(key => counts[key] === 1);
            return one[0] * one[1];
        }
    } else {
        return Math.min(a, b, c, d);
    }
}