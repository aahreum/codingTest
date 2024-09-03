const solution = (id_pw, db) => {
    let [id, pw] = id_pw
    for (let [dbId, dbPw] of db) {
        if (id === dbId && pw === dbPw) {
            return 'login';
        } else if (id === dbId && pw !== dbPw) {
            return 'wrong pw';
        }
    }
    return 'fail';
}