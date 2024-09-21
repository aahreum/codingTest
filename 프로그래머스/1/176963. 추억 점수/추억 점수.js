const solution = (name, yearning, photo) => {
    let answer = [];
    let obj = {};
    name.forEach((key, index) => {
        obj[key] = yearning[index];
    });
    photo.forEach((el) => {
        answer.push(el.reduce((acc, curr) => acc + (obj.hasOwnProperty(curr) ? obj[curr] : 0),0))
    })
    return answer;
}