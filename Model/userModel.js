// importing mongoose
const mongoose = require('mongoose');
// creating  mongoose schema 
const userSchema=mongoose.Schema({
    userName:{
        type:String,
        require:[true,"Please add a full name"],
    },
    email:{
        type:String,
        require:[true,"Please add an Email Address"], 
        unique:[true,"Please add a unique email"],          
    },
    password:{
        type:String,
        require:[true,"Please add a Email"],

}},

{
    timestamp:true,
}
);
// exporting the module 

module.exports = mongoose.model("Users",userSchema);