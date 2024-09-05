const solution = (n) => {
    let array = Array.from({length: n}, () => Array(n));
    let v = 1;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    
    while (v <= n * n) {
        for (let i = left; i <= right; i++) {
            array[top][i] = v++;
        }
        top++;
        
        for (let i = top; i <= bottom; i++) {
            array[i][right] = v++;
        }
        right--;
        
        for (let i = right; i >= left; i--) {
            array[bottom][i] = v++;
        }
        bottom--;
        
        for (let i = bottom; i >= top; i--) {
            array[i][left] = v++;
        }
        left++;
    }
    
    return array;
}