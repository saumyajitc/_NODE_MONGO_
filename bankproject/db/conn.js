const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/bank";

module.exports = {
    connectToServer: async () => {
        try{
            await mongoose.connect(dbUrl);
        }catch(err) {
            throw new Error(`Unable to connect to database ${err}`);
        }
    }
}