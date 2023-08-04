import mongoose from "mongoose";


const file = new mongoose.Schema({
    file:{
        type:String,
        
    }

},{
    timestamps:true
})


export const File = mongoose.model("Files",file)