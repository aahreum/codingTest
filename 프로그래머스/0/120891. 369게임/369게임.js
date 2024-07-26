const solution = (order) => {
    return String(order).split('').filter((w) => w === '3' || w === '6' || w === '9').length
}