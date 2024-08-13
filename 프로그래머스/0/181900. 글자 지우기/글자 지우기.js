const solution = (my_string, indices) => {
    return [...my_string].filter((el, idx) => !indices.includes(idx)).join('')
}