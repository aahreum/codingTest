const solution = (numbers) => {
    numbers.sort((a, b) => a - b)
    let length = numbers.length
    return numbers[length- 1] * numbers[length - 2]
}