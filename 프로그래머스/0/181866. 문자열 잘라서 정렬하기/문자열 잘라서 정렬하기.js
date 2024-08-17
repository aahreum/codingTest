const solution = (myString) => {
    return myString.split('x').sort().filter(el => el !== '');
}