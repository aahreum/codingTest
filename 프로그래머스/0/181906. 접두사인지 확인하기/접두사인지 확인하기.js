const solution = (my_string, is_prefix) => {
    let count = 0;
    
    for (let i = 0; i < is_prefix.length; i++) {
        if (my_string[i] === is_prefix[i]) {
            count++
        }
    }
    
    return count === is_prefix.length ? 1 : 0;
}