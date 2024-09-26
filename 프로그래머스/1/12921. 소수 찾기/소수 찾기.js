const solution = (n) => {
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        if (i > 2 && i % 2 === 0) {
            isPrime = false;
        } else {
            for (let j = 3; j <= Math.sqrt(i); j += 2) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            answer++;
        }
    }

    return answer;
};