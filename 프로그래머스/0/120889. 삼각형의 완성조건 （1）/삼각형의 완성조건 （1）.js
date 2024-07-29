const solution = (sides) => {
    sides.sort()
    let answer = sides[0] + sides[1] > sides[2] ? 1 : 2;
    return answer;
}