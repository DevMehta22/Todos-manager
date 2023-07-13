// app.use(express.json())

// app.use((req,res,next)=>{
//     console.log("Middleware")
//     next()
//     }
// )
// const port=3000

// app.get("/",(req,res)=>{
//     res.status(200).send("API HIT!")
// })

// app.post("/post",(req,res)=>{
//     const {name,email}=req.body
//     res.status(200).json({name,email})
// })

// app.put("/post/:id",(req,res)=>{
//     const {id}=req.params

//     console.log("PUT request");
//     res.status(200).send({id})
// })

// app.delete("/post/:id",(req,res)=>{
//     const {id}=req.params.id

//     console.log("DELETE request");
//     res.status(200)
// })


// app.listen(port,()=>{
//     console.log(`Server started on ${port}`);
// })
require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const todoRouter=require("./Routes/todoRoutes")


app.use(express.json())
app.use("/api/todo",todoRouter)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to DB")
    const port = process.env.PORT || 3000;
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
}).catch((err)=>{
    console.log('err');
})
