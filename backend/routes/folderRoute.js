import express from "express"
import { createFolder, getFolder } from "../controller/folder"



const router = express.Router()


router.get("/getFolder",getFolder)
router.post("/create",createFolder)

export default router