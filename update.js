const dbConnect = require('./mongodb');

const updateData=async()=>{
    let data = await dbConnect();
    let result =await data.updateOne(
        {name: 'redmi 11'},
        {$set: {name: 'redmi 12',price: '440'}
        }
        );
    console.warn(result);
}


updateData();