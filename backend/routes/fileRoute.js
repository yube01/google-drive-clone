import express from "express"
import { createFiles, getFiles } from "../controller/file.js"



const router = express.Router()


router.get("/getfiles",getFiles)
router.post("/create",createFiles)

export default router