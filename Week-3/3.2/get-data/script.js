//METHOD #1
// function getData() {
//     fetch("https://fakerapi.it/api/v1/persons").then(function (response) {
//         response.json().then(function (data) {
//             console.log(data);
//         })
//     })
// }
//METHOD #2
async function getData() {
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const data = await response.json();
    console.log(data);
    document.getElementById("container").innerHTML=JSON.stringify(data.data);
}