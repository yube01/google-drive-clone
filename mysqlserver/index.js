import express from "express"
import cors from "cors"
import { db } from "./model/dbconnect.js"







const app = express()

app.use(cors())

app.use(express.json())

db.connect((err) =>{
    if (err) throw err;
    console.log("Connected!");
  });


app.listen(9001,()=>{
    console.log("server started")
})