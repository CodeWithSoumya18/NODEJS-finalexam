import mongoose from "mongoose";
import { ref, string } from "yup";
import User from "./User.js";

 const productSchema = new mongoose.Schema({
    name: {type:string},
    price : Number,
    category:{type:mongoose.Schema.Types.ObjectId, ref: "Category"},
    User:{type:mongoose.Schema.Types.ObjectId, ref: "User"}
   
 })

  export default mongoose.model("Product", productSchema);
