const solution = (common) => {
    const diff = common[1] - common[0];
    
    for (let i = 2; i < common.length; i++) {
        if (diff === common[i] - common[i - 1]) {
            return common[common.length - 1] + diff
        } else {
            return common[common.length - 1] * common[1] / common[0]
        }
    }
}