const solution = (spell, dic) => {
    const sortedSpell = spell.sort().join('');
    let answer = 0;
    dic.forEach((w) => {
        const sortedW = [...w].sort().join('');
        if (sortedSpell === sortedW) answer++;
    })
    return answer ? 1 : 2;
}