// initialized mongoose package 
const mongoose = require('mongoose');
// creating mongoose Schema object data type for mongoose
const contactSchema=mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Users",
      },
    fullName:{
        type:String,
        require:[true,"Please add a full name"],
    },
    email:{
        type:String,
        require:[true,"Please add an Email Address"],           
    },
    phone:{
        type:String,
        require:[true,"Please add a Phone Number"],

},
},
{
    timestamp:true,
});

// importing 
module.exports = mongoose.model("My_Contact_Management",contactSchema);



  