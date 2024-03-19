const solution = (numbers) => {   
    const index = Math.floor(numbers.length / 2);
    let answer = 0;
    if (numbers.length % 2 === 1) {
        answer =  numbers[index];
    } else {
        answer = (numbers[index] + numbers[index - 1]) / 2
    }
    
    return answer.toFixed(1);
}