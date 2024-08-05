const solution = (n, control) => {
    let answer = n;
    let array = [...control]
    
    for (let i = 0; i < control.length; i++) {
        switch (control[i]) {
            case 'w' :
                answer += 1;
                break;
            case 's' :
                answer -= 1;
                break;
            case 'd' :
                answer += 10;
                break;
            default:
                answer -= 10;
        }
    }
    
    return answer;
}