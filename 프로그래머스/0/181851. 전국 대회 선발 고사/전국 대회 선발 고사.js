const solution = (rank, attendance) => {
    let array = rank.map((r, i) => ({r, i})).filter((_, i) => attendance[i]);
    array.sort((a, b) => a.r - b.r);
    let [a, b, c] = array.map(el => el.i);
    return 10000 * a + 100 * b + c;
}