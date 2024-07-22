const solution = (array, height) => {
    let answer = 0
    array.map((item)=> {
        if (item > height) answer++
    })
    return answer
}