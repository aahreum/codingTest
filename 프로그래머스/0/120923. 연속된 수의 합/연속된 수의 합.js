const solution = (num, total) => {
    const array = Array(num).fill(Math.floor(total / num));
    const midIdx = array.length % 2 === 0 ? Math.floor(array.length / 2) - 1: Math.floor(array.length / 2);
    const midV = array[midIdx];
    let answer = [];
    for (let i = 0; i <= midIdx; i++) {
        answer.push(midV - (midIdx - i));
    }
    for (let i = midIdx + 1; i < array.length; i++) {
        answer.push(midV + (i - midIdx));
    }
    return answer;
}