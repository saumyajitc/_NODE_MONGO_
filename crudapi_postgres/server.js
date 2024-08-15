import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const  app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//This router uses MongoDB low level CRUD operations methods
const employeeRouter = require('./controllers/employee.controller');
app.use('/employeeapi', employeeRouter);

// const customerRouter = require('./controllers/customer.controller');
// app.use('/customersapi', customerRouter);

app.listen(8000, (err) => {
    if(err) throw err;
    console.log(`Application started on port 8000`);
})