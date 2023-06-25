const express = require('express');
const app = express();

const reqFilter=(req,res,next)=>{
    // console.log('reqFilter');
    if(!req.query.age)
    {
        res.send("Please provide age")
    }
    else if(req.query.age<18)
    {
        res.send("You can not access this page.")
    }
    else{
        next();
    }
  
}

app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('Welcome to home page');
});

app.get('/user',(req,res)=>{
    res.send('Welcome to user Page ');
});

app.listen(5000);