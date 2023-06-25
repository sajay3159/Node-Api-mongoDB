const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insert(
        [
            {name:'vy1', brand:'vivo', price:350, category:'mobile'},
            {name:'vy2', brand:'vivo', price:350, category:'mobile'},
            {name:'vy3', brand:'vivo', price:350, category:'mobile'},
        ]
);
console.log(result);
}

insert();