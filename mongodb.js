const {MongoClient} = require('mongodb');
const url ='mongodb://localhost:27017';
const database = 'e-comm'
const client = new MongoClient(url);

async function dbConnect()
{
    let result= await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let response = await collection.find({name:'redmi 10a'}).toArray()
    // console.log(response);
} 

// dbConnect();

module.exports = dbConnect;
