const express=require("express");
const app=express();


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

require("dotenv").config();
PORT= process.env.PORT||4000;

const {dbConnection}=require("./config/mongoose");
dbConnection();

const routes=require("./routes/index");
app.use('/',routes);


app.get('/',(req,res)=>{
    res.send(`this is home page`)
});


app.listen(PORT,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",PORT);
});


