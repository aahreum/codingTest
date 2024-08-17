const solution = (date1, date2) => {
    let [y1, m1, d1] = date1;
    let [y2, m2, d2] = date2;
    
    return y1 < y2 || (y1 <= y2 && m1 < m2) || (y1 <= y2 && m1 <= m2 && d1 < d2) ? 1 : 0
}

// const solution = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0