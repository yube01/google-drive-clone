import { File } from "../model/file.js"

export const getFiles = async(req,res)=>{
    try {

        const files = await File.find({folderId:req.params.folderId})
        if(files) {
            return res.status(200).json(files)
        }else{
            return res.status(500).json("Folder has not been created")
        }

        
    } catch (error) {
        
    }

}


export const uploadFiles = async(req,res)=>{


   
    try {
        const{file,fileName,folderId}  = req.body
        


        const newFile = new File({file,fileName,folderId})
        const fileData = await newFile.save()
        res.status(200).json(fileData)
        
    } catch (error) {
        console.log(error)
        
    }



}