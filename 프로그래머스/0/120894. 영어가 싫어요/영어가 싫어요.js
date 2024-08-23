const solution = (numbers) => {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    num.forEach((w, i) => {
        numbers = numbers.replaceAll(w, i)
    })
    
    return Number(numbers)
}