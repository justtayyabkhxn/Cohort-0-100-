let arr = [2, 5, 4, 8, 9, 6, 3, 4, 5, 8, 8, 99, 66, 2, 1, 44, 52, 36, 5, 86, 2258, 2, 9, 622];
console.log("----> Before Reversing: ");
console.log(arr);
for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i-1];
    arr[arr.length - i-1] = temp;
}
console.log("----> After Reversing: ");
console.log(arr);
