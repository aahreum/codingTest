const solution = (ingredient) => {
    let count = 0;
    let stack = [];
    
    ingredient.forEach((item) => {
        stack.push(item);   
        if (stack.length >= 4 && stack.slice(-4).join('') === '1231') {
            count++;
            stack.splice(-4);
        }
    })
      
    return count;
}