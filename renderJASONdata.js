const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    // console.log("Data sent by browser =>>>",req.query.name)
    res.send('<h1>Hello this is a home page</h1><a href ="/about">Go to about page</a>' );
});

app.get('/about',(req,res)=>{
    res.send(`<input type = "text" placeholder = "User name"  value ="${req.query.name}"  />
    <button>Submit</button>
    <a href ="/">Go to home page </a>`);
});

app.get('/menu',(req,res)=>{
    res.send([
        {
            name: 'Ajay',
            sub : 'Math',
            Class: '12th',
            Dept : 'Mech'
        },
        {
            name: 'Vijay',
            sub : 'Science',
            Class: '12th',
            Dept : 'Mech'
        },
        {
            name: 'Jay',
            sub : 'Math',
            Class: '12th',
            Dept : 'Mech'
        },
        {
            name: 'Amey',
            sub : 'English',
            Class: '12th',
            Dept : 'Mech'
        }
    ]);
});

app.listen(4000);
