const solution = (arr1, arr2) => {
    const sum = (arr) => {
        return arr.reduce((acc, cur) => acc + cur, 0)
    }  
    
    if (arr1.length > arr2.length) {
        return 1;
    } else if (arr1.length < arr2.length) {
        return -1
    } else if (arr1.length === arr2.length && sum(arr1) === sum(arr2)) {
        return 0
    } else {
        return sum(arr1) > sum(arr2) ? 1 : -1;
    }  
}