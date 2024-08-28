const solution = (my_string, queries) => {
    let array = [...my_string]
    queries.forEach(([s, e]) => {
        let reverse = array.slice(s, e + 1).reverse()
        for (let i = 0; i < reverse.length; i++) {
            array[s + i] = reverse[i];
        }
    })
    return array.join('');
}