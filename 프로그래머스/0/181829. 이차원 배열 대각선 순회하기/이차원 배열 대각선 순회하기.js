const solution = (board, k) => {
    return board.flatMap((row, i) => row.filter((v, j) => i + j <= k)).reduce((acc, cur) => acc + cur, 0)
}