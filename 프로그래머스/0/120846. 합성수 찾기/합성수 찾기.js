const solution = (n) => {    
    let answer = 0
    for (let i = 1; i <= n; i++) {
        let counter = 0
        for (let j = 1; j <= i ; j++) {
            if (i % j == 0) {
                counter += 1
            }
        }
        if (counter >= 3) {
            answer += 1
        }
    }
    return answer
}