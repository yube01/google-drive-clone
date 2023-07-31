import  Express from "express";
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js"
import folderRoute from "./routes/folderRoute.js"
import fileRoute from "./routes/fileRoute.js"


dotenv.config()

const app = Express()

app.use(cors({
    origin:"*"
}))

app.use(Express.json())

const PORT = process.env.PORT



// database connection
mongoose.connect(process.env.MONGO)
.then(()=>console.log("DB connected"))
.catch((err)=> console.log(err))


//middleware

app.use("/auth",authRoute)
app.use("/folder",folderRoute)
app.use("/files",fileRoute)


//server connection

app.listen(PORT,()=>{
    console.log("Server started")
})