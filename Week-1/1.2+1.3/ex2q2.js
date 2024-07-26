let arr = [2, 5, 4, 8, 9, 6, 3, 4, 5, 8, 8, 99, 66, 2, 1, 44, 52, 36, 5, 86, 2258, 2, 9, 622];
let maxel = -1;
for (let i = 0; i < arr.length; i++) {
   if(arr[i]>maxel) maxel=arr[i];
}

console.log(maxel);
