const solution = (n, arr1, arr2) => {
    let answer = arr1.map((num, index) => {
        let binary = (num | arr2[index]).toString(2).padStart(n, '0');
        return binary.replace(/1/g, '#').replace(/0/g, ' ');
    });
    
    return answer;
}