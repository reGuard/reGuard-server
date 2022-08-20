var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const db_name = 'reGuard'
const collection_name = 'data'

const addParms = async (parms) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, async (err, db)=>{
            const dbo = db.db(db_name)
            dbo.collection(collection_name).insertOne(parms).then((res)=>{
                resolve(res.insertedId.toString())
            })  
        })
    })
}


const getParms = async (parms) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, async (err, db)=>{
            const dbo = db.db(db_name)
            const res = dbo.collection(collection_name).find(parms).toArray().then((res)=>{
                res.map((x)=>{
                    x._id = x._id.toString()
                })
                resolve(res)
            });
        })
    })       
}


module.exports = {
    addParms,
    getParms
}