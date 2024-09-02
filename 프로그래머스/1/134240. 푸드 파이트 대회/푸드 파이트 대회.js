const solution = (food) => {
    let array = [];
    for (let i = 0; i < food.length; i++) {
        const count = food[i] % 2 !== 0 ? Math.floor(food[i] / 2) : food[i] / 2; 
        array.push(...Array(count).fill(i));
    }
    return array.join('') + '0' + array.slice().reverse().join('');
}