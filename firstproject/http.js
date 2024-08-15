const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
        if(err) throw err
        response.write(data);
        response.end();
        console.log("response send");
    })
})

server.listen(3200);