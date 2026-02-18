import mongoose from "mongoose";
import { string } from "yup";

 const categorySchema = new mongoose.Schema({
  name:{type:string}

 })

  export default mongoose.model("Category", categorySchema);