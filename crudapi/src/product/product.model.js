import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
})

export default productSchema;