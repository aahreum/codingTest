const solution = (str_list) => {
    if (!str_list.includes('l') && !str_list.includes('r')) {
        return [];
    }
    
    let lIndex = str_list.indexOf('l');
    let rIndex = str_list.indexOf('r');
    
    if (str_list.includes('l') && !str_list.includes('r')) {
        return str_list.slice(0, lIndex);
    }
    if (!str_list.includes('l') && str_list.includes('r')) {
        return str_list.slice(rIndex + 1);
    }
    
    return lIndex < rIndex ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
}