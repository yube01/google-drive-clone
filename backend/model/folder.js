import mongoose from "mongoose";


const folder = new mongoose.Schema({
    folderId:{
        type:String,
        required:true,
        unique:true
    },
    userId:{
        type:String
        
    }
},{
    timestamps:true
})


export const Folder = mongoose.model("Folders",folder)