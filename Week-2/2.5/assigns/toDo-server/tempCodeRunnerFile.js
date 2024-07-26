const data = `{
            title:"${toDos[0].title}",
            description:"${toDos[0].description}",
}`;
fs.writeFile("todos.txt", data, function (err) {
  console.log("write successfull");
});
