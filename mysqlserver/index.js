import express from "express"
import cors from "cors"
import { db } from "./model/dbconnect.js"
import authUser from "./router/authRoute.js"
import cookieParser from "cookie-parser"

import post from "./router/folderRoute.js"



const app = express()



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors(
  {origin: 'http://localhost:5173'}
))

app.use(express.json())
app.use(cookieParser())


//middleware

app.use("/auth",authUser)
app.use("/post",post)

db.connect((err) =>{
    if (err) throw err;
    console.log("Connected!");
  });


app.listen(9001,()=>{
    console.log("server started")
})