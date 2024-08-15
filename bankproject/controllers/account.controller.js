const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const collection_name = "accounts";


const accountSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    accountNumber: Number
})

const Account = mongoose.model(collection_name, accountSchema);

router.get("/", (req, res) => {
    res.send("<b>Account</b> apis!!");
  })
  
  router.get("/accounts", async(req, res) => {
    try{
      const accounts =  await Account.find();
      res.send(accounts);
    } catch(err){
      console.log("An error occurred pulling the records. " + err);
    }
  });
  
  router.get("/accounts/:id", async (req, res) => {
    const accountId = req.params.id;
    try{
      const account =  await Account.findById({_id: accountId})
      res.send(account);
    } catch(err){
      console.log("An error occurred pulling the records. " + err);
    }
  });
  
  router.post("/accounts", async (req, res) => {
    try{
     const account = new Account(req.body);
     const result = await account.save();
     const { _id } = result;
     _id && res.send("Account created successfully");
    } catch(err){
      console.log("An error occurred while creating the account. " + err);
    }
  });
  
  router.put("/accounts/:id", async (req, res) => {
    const accountId = req.params.id;
    try{
      const result = await Account.findOneAndUpdate({_id: accountId}, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            accountNumber: req.body.accountNumber
        }
      });
      result && res.send("Account updated successfully");
    } catch(err){
      console.log("An error occurred while creating the account. " + err);
    }
  });
  
  router.delete("/accounts/:id", async (req, res) => {
    const accountId = req.params.id;
    try{
      const result =  await Account.findOneAndDelete({_id: accountId});
      result && res.send("Account deleted successfully");
    } catch(err){
      console.log("An error occurred while deleting the record. " + err);
    }
  });
  
  module.exports = router;
  