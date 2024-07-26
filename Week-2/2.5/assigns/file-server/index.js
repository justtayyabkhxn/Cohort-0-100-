/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */



// -------->>MY SOLUTION #########

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const files = ["tayyab.txt", "zoya.txt", "anas.txt", "lol.txt", "khan.txt"];

app.get("/files", function (req, res) {
  res.json({
    fileList: files
  });
})

app.get("/files/:fileName", function (req, res) {
  if (files.length >= 0) res.status(200);
  else {
    res.status(403)
    return;
  }
  const fileName = req.params.fileName;
  console.log(files.indexOf(fileName));
  if (files.indexOf(fileName) >= 0) {
    fs.readFile(`files/${fileName}`, "utf-8", function (err, data) {
      if (err) {
        return res.status(404).json({
          error: "some error occured while accessing the file"
        })
      }

      res.send(data
      );
    })
  }
  else {
    return res.status(404).json({
      error: "some error occured while accessing the file"
    })
  }
})
app.listen(3000);
module.exports = app;


// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();

// app.get('/files', function (req, res) {
//   fs.readdir(path.join(__dirname, './files/'), (err, files) => {
//     if (err) {
//       return res.status(500).json({ error: 'Failed to retrieve files' });
//     }
//     res.json(files);
//   });
// });

// app.get('/files/:filename', function (req, res) {
//   const filepath = path.join(__dirname, './files/', req.params.filename);

//   fs.readFile(filepath, 'utf8', (err, data) => {
//     if (err) {
//       return res.status(404).send('File not found');
//     }
//     res.send(data);
//   });
// });

// app.listen(3000);
// app.all('*', (req, res) => {
//   res.status(404).send('Route not found');
// });
