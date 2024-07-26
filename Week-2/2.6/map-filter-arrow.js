const fs = require("fs");
//---->Arrow Functions
const sum = (a, b) => {
    return a + b;
}
console.log("Sum is: " + sum(5, 7));

fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) console.log("error occured");
    else console.log(data);
})

//------>Map

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newarr=arr.map((x)=>{
    return x*10;
})
console.log(newarr);

//--->Filter

const newOddArr=arr.filter((x)=>{
    if(x%2==0) return false;
    else return true;
})

console.log(newOddArr)


