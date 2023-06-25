const express = require('express');
const reqFilter = require('./middleware1')
const app = express();
const route = express.Router();



route.use(reqFilter);

app.get('/',reqFilter,(req,res)=>{
    res.send('Welcome to home page');
});

app.get('/user',(req,res)=>{
    res.send('Welcome to user Page ');
});

route.get('/about',(req,res)=>{
    res.send('Welcome to user Page ');
});

route.get('/help',(req,res)=>{
    res.send('Welcome to user Page ');
});

app.get('/list',(req,res)=>{
    res.send('Welcome to user Page ');
});

app.use('/',route);

app.listen(5000);