const solution = (arr) => {
    if (arr.length > arr[0].length) {
        let diff = arr.length - arr[0].length;
        for (let i = 0; i < arr.length; i++) {
            arr[i].push(...Array(diff).fill(0));
        }
    } else if (arr.length < arr[0].length) {
        let diff = arr[0].length - arr.length;
        let array = new Array(arr[0].length).fill(0);
        arr.push(...Array(diff).fill(array));
    }
    return arr;
}