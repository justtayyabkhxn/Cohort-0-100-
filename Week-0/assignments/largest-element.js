function largest_element(arr) {
    var ans = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > ans) ans = arr[i];
    }
    return ans;
}
const arr = [55, 1, 4, 5, 66, 2, 1, 54, 8, 5, 62, 201];
console.log(largest_element(arr));