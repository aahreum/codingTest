const solution = (myStr) => {
    let answer = myStr.split(/[a-c]/g).filter((el) => el !== '');
    return answer.length === 0 ? ['EMPTY'] : answer;
}