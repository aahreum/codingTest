const solution = (cards1, cards2, goal) => {
    let card1Idx = 0;
    let card2Idx = 0;
    for (let w of goal) {
        if (cards1[card1Idx] === w) {
            card1Idx++;
        } else if (cards2[card2Idx] === w) {
            card2Idx++;
        } else {
            return 'No'
        }
    }
    return 'Yes';
}