const solution = (numbers) => {
    numbers.sort((a, b) => (b - a))
    let a = numbers[0] * numbers[1]
    let b = numbers[numbers.length - 1] * numbers[numbers.length - 2]
    return Math.max(a, b);
}