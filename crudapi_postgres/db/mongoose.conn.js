const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/productsDB";

module.exports = {
    connectToServer: async () => {
        try{
            await mongoose.connect(dbUrl);
        } catch(err) {
            console.log(err);
        }
    }
};
