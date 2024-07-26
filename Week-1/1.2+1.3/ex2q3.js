const users = [{
    firstname: "Tayyab",
    lastname: "Khan",
    gender: "Male"
},
{
    firstname: "Zoya",
    lastname: "Khan",
    gender: "Female"
},
{
    firstname: "Anas",
    lastname: "Abrar",
    gender: "Male"
},
{
    firstname: "Zoya",
    lastname: "Khan",
    gender: "Female"
}
];
for (let i = 0; i < users.length; i++) {
    if (users[i]["gender"] == "Male") console.log("Hello Mard " + users[i]["firstname"]);
    else console.log("Hello Aurat " + users[i]["firstname"]);
}