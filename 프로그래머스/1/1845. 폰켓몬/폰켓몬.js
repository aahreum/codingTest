const solution = (nums) => {
    let set = [...new Set(nums)];
    return Math.min(nums.length / 2, set.length);
}