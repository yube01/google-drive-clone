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
        console.log("error")
        
    }

}


export const editFolder = async(req,res)=>{

    try {
        const{id} = req.params
        const{folderName} = req.body
        const edit = await Folder.findByIdAndUpdate(id,folderName)

        if(!edit) return res.status(500).json("Folder not found")
        res.status(200).json("Folder name updated")
        
    } catch (error) {
        console.log("error")
        
    }

}


export const deleteFolder = async(req,res)=>{

    try {
        const {id} = req.params
        const deleteFolder = await Folder.findByIdAndDelete(id)

        if(!deleteFolder) return res.status(500).json("Folder not found")

        res.status(200).json(deleteFolder)

        
    } catch (error) {
        console.log(error)
    }

}