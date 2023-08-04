import  Express from "express";
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js"
import folderRoute from "./routes/folderRoute.js"
import fileRoute from "./routes/fileRoute.js"
import multer from "multer"
import { File } from "./model/file.js";



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




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/src/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.post("/filesUp",upload.single("file"),async(req,res)=>{


    const fileName = req.file.filename

    try {
        await File.create({file:fileName})
        res.status({status:'ok'})
        
    } catch (error) {
        console.log(err)
        
    }


})
app.get("/fileDown",async(req,res)=>{
    try {
        File.find({}).then((data)=>{
            res.send(data)
        })
        
    } catch (error) {
        console.log(error)
    }
})


//server connection

app.listen(PORT,()=>{
    console.log("Server started")
})