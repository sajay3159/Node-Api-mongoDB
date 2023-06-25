const express = require("express");
const dbConnect = require("./mongodb");
bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.put("/", async (req, res) => {
  let data = await dbConnect();
  let result =await data.updateOne(
    {name: "One plus-12"},
    {$set:req.body}
  );
  console.log(result);
  res.send("update data");
});

app.listen(4000);
