const userstr = `{"name":"Tayyab Khan","Enno":"GK4734","School":"AMU","phno":"8279961679"}`;

console.log("Original String: " + userstr);
const userobj = JSON.parse(userstr);
console.log(userobj);
console.log(userobj["name"]);