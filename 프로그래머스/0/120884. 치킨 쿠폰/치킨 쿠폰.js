const solution = (chicken) => {
    let answer = 0;
    let coupon = chicken;
    
    while (coupon >= 10) {
        let service = Math.floor(coupon / 10);
        answer += service;
        coupon = coupon % 10 + service;
    }
    
    return answer;
}