import express from "express"
import { createFile, deleteFile, editFile, getFiles } from "../controller/fileCont.js"



const router = express.Router()


router.get("/getFile",getFiles)
router.post("/createFile",createFile)
router.put("/editFile",editFile)
router.delete("/deleteFile",deleteFile)



export default router