const solution = (sizes) => {
    let maxW = 0;
    let maxH = 0;
    sizes.forEach(([w, h]) => {
        [w, h] = [Math.max(w, h), Math.min(w, h)];
        if (w > maxW) maxW = w;
        if (h > maxH) maxH = h;
    })
    return maxW * maxH;
}