import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import path from 'path';
const app=express();
const port= process.env.PORT


app.get('/api/mydata',(req,res)=>{
    return res.status(200).json({
        message:"Backend kam kar rha hai",
        success:true
    })
})

 if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(path.resolve(),'frontend','dist')))
    app.get('*',(req,res)=>{
       return res.sendFile(path.join(path.resolve(),'frontend','dist','index.html'))
    })  
 }else{
    app.get('/*',(req,res)=>{
        return res.json({
            message:"API is working"
        })
    })
 }


app.listen(port,()=>{
    console.log(`Server is running on port :: ${port}`);
})

