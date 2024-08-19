const solution = (phone_number) => {
    let masking = phone_number.replace(/[0-9]/g, '*').slice(0, -4)
    let number = phone_number.slice(-4);
    return masking + number;
}