const solution = (a, b) => {
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    a = String(a).length === 1 ? String(a).padStart(2, '0') : String(a);
    b = String(b).length === 1 ? String(b).padStart(2, '0') : String(b);
    let index = new Date(`2016-${a}-${b}`).getDay();
    return day[index];
}