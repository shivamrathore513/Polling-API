const mongoose =require("mongoose");
require('dotenv').config();
const URL=process.env.DATABASE_URL;

module.exports. dbConnection=()=>{
       mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       }).then(()=>{
        console.log(`db connected sucessfully`)
       }).catch((error)=>{
            console.log(`failoed to connect databse`);
            console.error(error.message);
            process.exit(1);
       })

       
}

