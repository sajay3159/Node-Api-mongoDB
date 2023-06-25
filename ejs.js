const express =  require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname,'public');
// app.use(express.static(publicPath));
app.set('view engine','ejs');

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

app.get('/profile',(_,res)=>{
    const user ={
        name:'Ajay Sahani',
        email:'sajay3159@gmail.com',
        city:'Vadodara',
        skills:['java','php','js','html']
    }
    res.render('profile', {user});
});

app.get('/login',(_,res)=>{
    res.render('login');
})

app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/nopage.html`);
});

app.listen(4500);