const solution = (a, b) => {
    let num1 = Number(a + '' + b);
    let num2 = Number(b + '' + a);
    return num1 === num2 ? num1 : num1 > num2 ? num1 : num2;
}