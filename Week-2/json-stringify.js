// const strdata = `{ "name": "Tayyab Khan", "class":"MCA", "GPA":8.16, "DOB":"21/07/2002"}`;
const jsondata = { name: "Tayyab Khan", class: "MCA", GPA: 8.16, DOB: "21/07/2002" };
// const jsontype = JSON.parse(data);
console.log(jsondata);
const strdata=JSON.stringify(jsondata);
console.log(strdata);
// console.log(data);