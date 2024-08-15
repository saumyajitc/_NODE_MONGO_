const { MongoClient } = require("mongodb");
const dbUrl = "mongodb://localhost:27017";
const client = new MongoClient(dbUrl);

let _db;

module.exports = {
    connectToServer: async () => {
        try{
            await client.connect();
        } catch(err) {
            console.log(err);
        }
    },

    getDb: (dbname) => {
        _db = client.db(dbname);
        return _db;
    }
};
