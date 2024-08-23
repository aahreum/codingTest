const solution = (arr1, arr2) => {
    let answer = Array.from({length: arr1.length}, (_, i) => Array.from({length: arr1[i].length}, (_, j) => arr1[i][j] + arr2[i][j]));
    return answer;
}