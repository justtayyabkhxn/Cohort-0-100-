const str="Tayyab loves Zoya and Zoya Loves Tayyab";
console.log("Original String: "+str);
// length
console.log("Length: "+str.length)
// index of
console.log("Index of Tayyab: "+str.indexOf("Tayyab")+" \nindex of Zoya: "+str.indexOf("Zoya"));
//last index of 
console.log("Last Index of Tayyab: "+str.lastIndexOf("Tayyab")+" \nLast index of Zoya: "+str.lastIndexOf("Zoya"));
//slice
console.log("Sliced: "+str.slice(10,20));
//substr
console.log("Sub: "+str.substring(5,30));
//replace
console.log("Replaced: "+str.replace("Tayyab","Zoya"));
//touppercse
console.log("Upper: "+str.toUpperCase());
//lowercase
console.log("Lower: "+str.toLowerCase());


