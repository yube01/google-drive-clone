import express from "express"
import { createFolder, deleteFolder, editFolder, getFolder } from "../controller/folder.js"



const router = express.Router()


router.get("/getFolder/:owner",getFolder)
router.post("/createFolder",createFolder)
router.put("/editFolder/:id",editFolder)
router.delete("/deleteFolder/:id",deleteFolder)

export default router