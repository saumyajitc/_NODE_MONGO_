import mongoose from 'mongoose';
import productSchema from "./product.model.js";

productSchema.statics = {
    get: async function(query, cb) {
        try{
            const products = await this.find()
            return products
        }catch(err) { cb(err) }
    },
    getById: async function(query, cb) {
        try{
            const product = await this.findOne(query)
            return product
        }catch(err) { cb(err) }
     },
    create: async function(data, cb){
        try{
            const product = this(data);
            const response = await product.save();
            return response
        } catch(err){ cb(err) } 
    },
    update: async function (query, updateData, cb) {
        try{
            const response = await this.findOneAndUpdate(query, {$set: updateData});
            return response
        } catch(err) {cb(err)}
    },
    delete: async function(query, cb) {
        try{
            const response = await this.findOneAndDelete(query)
            return response
        } catch(err){cb(err)}
    }
}

const productModel = mongoose.model("products", productSchema);

export default productModel;