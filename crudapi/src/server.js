import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import properties from "./config/properties.js";
import ROUTES from "./product/product.routes.js";
import MONGODB from "./config/db.js";

const  app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// get driver connection [Mongoose version]
MONGODB.connectToServer();

// This router uses Mongoose to connect to Mongo and use CRUD operation methods
const productRouter = express.Router();
ROUTES(productRouter);
app.use('/productsapi', productRouter);

//This router uses MongoDB low level CRUD operations methods
// const customerRouter = require('./controllers/customer.controller');
// This router uses Mongoose to connect to Mongo and use CRUD operation methods
// const customerRouter = require('../controllers/customer.mongoose.controller');
// app.use('/customersapi', customerRouter);

app.listen(properties.PORT, (err) => {
    if(err) throw err;
    console.log(`Application started on port ${properties.PORT}`);
})