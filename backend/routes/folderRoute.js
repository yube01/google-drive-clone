import express from "express"
import { createFolder, getFolder } from "../controller/folder.js"



const router = express.Router()


router.get("/getFolder/:owner",getFolder)
router.post("/createFolder",createFolder)

export default router