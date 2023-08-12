import { db } from "../model/dbconnect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const  register = async(req,res)=>{

    const q = "SELECT * FROM user WHERE name = ?"

    db.query(q,[req.body.name],(err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User already exists")


    })

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword =bcrypt.hashSync(req.body.password,salt)

    const insert  ="insert into user (`name`,`email`,`password`) values (?)"

    const values = [req.body.name,req.body.email,hashedPassword]

    db.query(insert,[values],(err,data)=>{
        if(err) return res.status(500).json(err)

        return res.status(200).json("user has been created")
    })


}


export const login  = async(req,res)=>{

    const q = "SELECT * FROM user WHERE name = ?"
    db.query(q,[req.body.name],(err,data)=>{
        if (err) return res.status(500).json(err)

        if (data.length === 0) return res.status(404).json("user not found")

        const checkPw  = bcrypt.compareSync(req.body.password, data[0].password)
        if(!checkPw) return res.status(400).json("wrong password")

        const token = jwt.sign({id:data[0].id},"key")
        const {password,...others} = data[0]

        res.cookie("access-token",token,{
            httpOnly: true
        } ).status(200).json(others)




    })

    

}


export const logout = async(req,res)=>{
    res.clearCookie("access-token",{
        secure:true,
        sameSite:"none"
    }).status(200).json("user has been logged out")
}