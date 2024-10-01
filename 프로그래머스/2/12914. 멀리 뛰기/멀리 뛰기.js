const solution = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let dp = [0, 1, 2];
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567
    }
    
    return dp[n];
}