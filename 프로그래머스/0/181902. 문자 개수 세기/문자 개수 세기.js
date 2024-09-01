const solution = (my_string) => {
    let object = {};
    for (let i = 'A'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        if ((i >= 'A'.charCodeAt(0) && i <= 'Z'.charCodeAt(0)) || (i >= 'a'.charCodeAt(0) && i <= 'z'.charCodeAt(0))) {
        object[String.fromCharCode(i)] = 0;
    }
    }
    for (let i = 0; i < my_string.length; i++) {
        object[my_string[i]] += 1;
    }
    
    return Object.values(object);
}