const fs=require("fs");
function tayyabReadsFile(){
    return new Promise(function(resolve){
        fs.readFile("file.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}
function onDone(data){
    console.log(data);
}

tayyabReadsFile().then(onDone);