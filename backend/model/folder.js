import mongoose from "mongoose";


const folder = new mongoose.Schema({
    folderName:{
        type:String,
        required:true,
        unique:true
    },
    files:{
        type:Array
    }
},{
    timestamps:true
})


export const Folder = mongoose.model("Folders",folder)