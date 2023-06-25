const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
console.log(dirPath)
const filePath = `${dirPath}/apple.txt`;

//fs.writeFileSync(filePath,'This is a simple text');
//  fs.readFile(filePath,'utf8',(err,item)=>{
//      console.log(item)
//  });
// fs.appendFile(filePath,' and file name is abc.txt',(err)=>{
//     if(!err) console.log("File is updated");
// });
fs.rename(filePath,`${dirPath}/mango.txt`,(err)=>{
    if(!err) console.log("File name is updated");
});
// fs.unlinkSync(`${dirPath}/mango.txt`);
