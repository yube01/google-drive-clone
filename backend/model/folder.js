import mongoose from "mongoose";


const folder = new mongoose.Schema({
    folderName:{
        type:String,
        
        unique:true
    },
    owner:{
        type:String,
        required:true

    },
    files:{
        type:Array
    }
},{
    timestamps:true
})


export const Folder = mongoose.model("Folders",folder)