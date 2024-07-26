const solution = (order) => {
    let answer = 0;
    String(order).split('').filter((w) => w === '3' || w === '6' || w === '9' ? answer++ : 0 )
    return answer;
}