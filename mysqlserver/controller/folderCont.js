import Jwt  from "jsonwebtoken";
import moment from "moment"
import { db } from "../model/dbconnect.js";

export const createFolder = async(req,res)=>{

    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!")

    Jwt.verify(token, "key",(err,userInfo)=>{
        if(err) return res.status(403).json("Token not valid")

        const q = "INSERT INTO folder (`foldername`) VALUES (?)"
        const values = [
            req.body.foldername,
            // moment(Date.now()).format("YYYY-MM-DD:mm:ss"),
            

        ]
        console.log(userInfo.id)

        db.query(q,[values],(err,data)=>{
            if(err) res.status(500).json(err)
            return res.status(200).json("Folder created")

        })

    })
    
    

}

export const deleteFolder = async(req,res)=>{

}

export const editFolder = async(req,res)=>{

}

export const getFolder =async(req,res)=>{
    
}