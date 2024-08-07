const solution = (a, b) => {
    let sum = Number(String(a) + String(b));
    let double = 2 * a * b;
    return sum < double ? double : sum;
}