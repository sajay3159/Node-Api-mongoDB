const express = require('express');
bodyParser = require("body-parser");
const dbConnect = require('./mongodb');
const app = express();

app.use(bodyParser.json());


app.post("/",async(req,res)=>{
   let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
})


app.listen(4500);