import express from "express"
import { getFiles, uploadFiles } from "../controller/file.js"



const router = express.Router()


router.get("/getfiles",getFiles)
router.post("/createFiles",uploadFiles)

export default router