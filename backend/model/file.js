import mongoose from "mongoose";


const file = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required: true
    },
    folderId:{
        type:String
    }

},{
    timestamps:true
})


export const File = mongoose.model("Files",file)