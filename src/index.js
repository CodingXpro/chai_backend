import express from 'express';
import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({
    path:'./.env'
})

const app=express();
app.use(express.json())

connectDB();

/*
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error :",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on Port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error",error)
        throw error
    }

})()
*/