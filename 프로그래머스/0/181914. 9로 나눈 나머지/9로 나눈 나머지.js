const solution = (number) => {
    let sum = [...number].map(Number).reduce((acc, cur) => acc + cur, 0)
    return sum % 9;
}