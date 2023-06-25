const http = require('http');
 http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify({name:'Ajay Sahani',email:'sajay3159@gmail.com'}));
resp.end();
}).listen(5000);



// const express = require('express')
// const app = express()
// const port = 4000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })