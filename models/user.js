const mongoose = require('mongoose')

//This is basically creating a table but using MongoDB
const userSchema = new mongoose.Schema({
    id:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    emailConfirmed:{
        type:Boolean,
        required:true,
        default:false
    },
    dateOfBirth:{
        type: Date
    }

})

module.exports = mongoose.model('User', userSchema)