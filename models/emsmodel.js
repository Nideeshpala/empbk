const mongoose=require('mongoose')

// schema
const employeeschema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true

    },
    lname:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength:10,
        maxlength:13
    },
    gender:{
        type:String,
        required:true

    },
    status:{
        type:String,
        required:true,

    },
    profile:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    }


})

// model creation

const employees=new mongoose.model('employees',employeeschema)

module.exports=employees