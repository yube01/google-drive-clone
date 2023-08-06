import { File } from "../model/file.js"

export const getFiles = async()=>{

}


export const uploadFiles = async(req,res)=>{


   
    try {
        const{file}  = req.body
        


        const newFile = new File({file})
        const fileData = await newFile.save()
        res.status(200).json(fileData)
        
    } catch (error) {
        console.log(error)
        
    }



}