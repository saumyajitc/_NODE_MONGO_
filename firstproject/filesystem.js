const fs = require('fs');

//Write File
/* fs.writeFile("sample.txt", "Node os awesome but async functions rock", (err) => {
    if(err) throw err
    console.log("Created a file");
    console.log("END");
}); */

// Append File
/* fs.appendFile("sample.txt", "Async functions are the way to go", (err) => {
    if(err) throw err
    console.log("Appended to the previous file");
    console.log("END");
}); */

//Rename file
/* fs.rename("sample.txt", "demo.txt", (err) => {
    if(err) throw err
    console.log("File renamed");
    console.log("END");
}); */

//Read file
/* fs.readFile("demo.txt", "utf8", (err, data) => {
    if(err) throw err
    console.log(data);
    console.log("END");
}); */

//Delete file
fs.unlink("demo.txt", (err) => {
    if(err) throw err
    console.log("File deleted");
});