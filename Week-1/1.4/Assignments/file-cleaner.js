
const fs = require('fs');

fs.readFile("file2.txt", "utf-8", function (err, data) {

    if (err) console.log("Error while reading")
    else {
        console.log("read successfull");
        let str_recieved = data.replace(/\s+/g, ' ').trim();
        const toWrite = `Provided String: ${data}  \nPrinted Stringk kl: ${str_recieved} `;
        fs.writeFile("file2.txt", toWrite, function (err) {
            if (err) console.log("Error Occured");
            else console.log("Writing Successfull");
        })
    }
})