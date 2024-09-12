const solution = (a, b) => {
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let index = new Date(`2016-${a}-${b}`).getDay();
    return day[index];
}