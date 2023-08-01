import { Folder } from "../model/folder.js";

export const getFolder = async(req,res)=>{

    try {
        
        const uFolder = await Folder.find({owner:req.params.owner})

        if(uFolder) {
            return res.status(200).json(uFolder)
        }else{
            return res.status(500).json("Folder has not been created")
        }

        
        
    } catch (error) {
        console.log(error)
        
    }


}


export const createFolder = async(req,res)=>{


    try {


    const{folderName,owner} = req.body;

    const folder = await Folder.findOne({folderName})

    if(folder) return res.status(500).json("Folder with similar name already exist")

    const newFolder = new Folder({folderName,owner})
    const user = await newFolder.save()
    res.status(200).json("Folder created")
        
    } catch (error) {
        console.log(error)
        
    }

}