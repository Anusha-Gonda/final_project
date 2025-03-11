const express=require('express')
const connectDB=require('./config/db.js')

const app=express();
//connect to mongodb
connectDB();

//middleware to pass the json data

app.use(express.json());

//define the simple route

app.get("/",(req,res)=>{
    res.send("Hello from the server");
})

//set the port

const PORT=3000;

//start our server
app.listen(PORT,()=>
{
    console.log(`server is running on port ${PORT}`);
})