const solution = (arr) => {
    let diff = Math.abs(arr.length - arr[0].length);
    if (arr.length > arr[0].length) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].push(...Array(diff).fill(0));
        }
    } else if (arr.length < arr[0].length) {
        let array = new Array(arr[0].length).fill(0);
        arr.push(...Array(diff).fill(array));
    }
    return arr;
}