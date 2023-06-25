const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log("Data sent by browser =>>>",req.query.name)
    res.send('Hello this is a home page' + req.query.name )
});

app.get('/about',(req,res)=>{
    res.send('Hello this is a about page')
});

app.get('/menu',(req,res)=>{
    res.send('Hello this is a menu page')
});

app.listen(4000);
