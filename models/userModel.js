const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required."],
        minLength:[6,"Name should have minimum characters 6."],
        maxLength:[16,"Name should have maximum characters 16."]
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:[6,"Name should have minimum characters 6."],
        maxLength:[16,"Name should have maximum characters 16."]
    
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },
    password:{
        type:String,
        required:true,
        minLength:[6,"Password should have minimum characters 6."],
        maxLength:[15,"Password should have maximum characters 15."]
    }

})

module.exports = mongoose.model('user',userSchema)