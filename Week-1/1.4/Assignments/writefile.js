const fs=require('fs');
const data="Tayyab Loves Zoya";

fs.writeFile("file.txt",data,function(err){
    if(err){
        console.log("Error Occured");
    }
    else console.log("File write successfull");
});