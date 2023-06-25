const dbConnect = require("./mongodb");

// dbConnect().then((resp)=>{
//   resp.find().toArray().then((data)=>{
//     console.warn(data)
//   })
// })

const main = async () => {
  let data = await dbConnect();
  data = await data.find({ name: "redmi 10a" }).toArray();
  console.warn(data);
};

main();
