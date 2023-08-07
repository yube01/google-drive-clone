import mongoose from "mongoose";


const file = new mongoose.Schema({
    file:{
        type:String,
        required:true
        
    },
    fileName:{
        type:String,
        required:true
    },
    folderId:{
        type:String

    }

},{
    timestamps:true
})


export const File = mongoose.model("Files",file)