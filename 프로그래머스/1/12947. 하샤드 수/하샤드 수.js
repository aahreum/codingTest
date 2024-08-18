const solution = (x) => {
    let division = [...String(x)].reduce((acc, curr) => acc + Number(curr), 0);
    return x % division ? false : true;
}