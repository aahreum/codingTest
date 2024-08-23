const solution = (numbers) => {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    num.forEach((w, i) => {
        const reg = new RegExp(w, 'g');
        numbers = numbers.replace(reg, i)
    })
    
    return Number(numbers)
}