const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8000;

const dbo = require("./db/conn");

const accountRouter = require("./controllers/account.controller");
app.use("/accountsapi", accountRouter);

app.listen(port, async () => {
    await dbo.connectToServer(err => {
        if(err) console.log(err);
    })
    console.log(`Application started in port ${port}`)
})

