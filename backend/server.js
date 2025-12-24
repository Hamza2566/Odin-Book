import express from "express"
const PORT = 2881


const app = express()



app.get("/",(req,res)=>{
    res.send({message: "How are you"})
})




app.listen(PORT,()=>{
    console.log("Hi am ");  
})