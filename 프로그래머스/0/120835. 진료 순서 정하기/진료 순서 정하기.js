const solution = (emergency) => {
    let sort = [...emergency].sort((a, b) => b - a);
    return emergency.map((el) => sort.indexOf(el) + 1)
}