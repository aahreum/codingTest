const solution = (money) => {
    const icedCoffee = 5500;
    let answer= [Math.floor(money / icedCoffee), money % icedCoffee];
    return answer;
}