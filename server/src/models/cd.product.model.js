import mongoose,{Schema} from "mongoose";

const cdProdcutSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true,
        default:"Other"
    },
    Image:{
        type:String,
        required:true,
        default:"no image"
    },
    Quantity:{
        type:String,
        required:true,
        default:1
    },
    "Added Date":{
        type:Number,
        requred:true,
        default:0
    }
},{timestamps:true})


export const CD = mongoose.model("CD", cdProdcutSchema);
