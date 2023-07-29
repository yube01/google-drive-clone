import mongoose from "mongoose";


const folder = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    owner:{
        typpe:String
        
    }
},{
    timestamps:true
})


export const Folder = mongoose.model("Folders",folder)