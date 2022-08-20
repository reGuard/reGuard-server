var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const db_name = 'reGuard'

const addParms = async (parms) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, async (err, db)=>{
            const dbo = db.db(db_name)
            dbo.collection('config').insertOne(parms).then((res)=>{
                resolve(res.insertedId.toString())
            })  
        })
    })
}

module.exports = {
    addParms
}