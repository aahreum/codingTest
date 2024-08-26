const solution = (arr, queries) => {
    queries.forEach(([s, e]) => {
        for (let i = 0; i < arr.length; i++) {
            if (s <= i && i <= e) {
                arr[i] += 1;
            }
        }
    })
    return arr;
}