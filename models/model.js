//middelwares
const mongoose = require("mongoose")
//1- Create schema
const CategorySchema = new mongoose.Schema(
    {
    name:{ 
    type:String,
    require: [true,"Category required"],
    unique: [true,"Category must be unique"],
    minlength: [5,"Too short category name"],
    maxlingth: [32," Too long Category name"]
   },
   slug :{
    type:String,
    lowercase: true,
   },
   image: String,
   },
   //mongoose options
   {timestamps:true}
)
// 2- creacte model
const CategoryModel = mongoose.model('Category', CategorySchema)
module.exports = CategoryModel;