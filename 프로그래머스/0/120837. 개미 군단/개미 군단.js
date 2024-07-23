const solution = (hp) => {
    const generalATK = 5;
    const soldierATK = 3;
    
    return Math.floor(hp / generalATK) + Math.floor((hp % generalATK) / soldierATK) + ((hp % generalATK) % soldierATK)
}