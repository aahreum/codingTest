const solution = (array) => {
    let answer = [...array.join('')].filter((el) => el !== '7');
    return [...array.join('')].length - answer.length;
}