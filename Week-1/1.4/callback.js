function findsum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) ans += i;
    return ans;
}
function findsum100() {
    return findsum(100);
}

setTimeout(findsum100,10000);
console.log("Hello");