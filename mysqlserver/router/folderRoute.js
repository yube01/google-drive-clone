import express from "express"
import { createFolder, deleteFolder, editFolder, getFolder } from "../controller/folderCont.js"




const router = express.Router()


router.get("/getFolder",getFolder)
router.post("/createFolder",createFolder)
router.put("/editFolder",editFolder)
router.delete("/deleteFolder",deleteFolder)



export default router