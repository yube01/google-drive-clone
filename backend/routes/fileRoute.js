import express from "express"
import { deleteFile, editFile, getFiles, uploadFiles } from "../controller/file.js"



const router = express.Router()


router.get("/getfiles/:folderId",getFiles)
router.post("/createFiles",uploadFiles)
router.put("/editFile/:id",editFile)
router.delete("/deleteFile/:id",deleteFile)

export default router