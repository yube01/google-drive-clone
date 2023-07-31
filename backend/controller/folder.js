import { Folder } from "../model/folder.js";

export const getFolder = async(req,res)=>{

}


export const createFolder = async(req,res)=>{


    try {


    const{folderName} = req.body;

    const folder = await Folder.findOne({folderName})

    if(folder) return res.status(500).json("Folder with similar name already exist")

    const newFolder = new Folder({folderName})
    const user = await newFolder.save()
    res.status(200).json("Folder created")
        
    } catch (error) {
        console.log(error)
        
    }

}