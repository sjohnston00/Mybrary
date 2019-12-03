const mongoose = require('mongoose')


//This is basically creating a table but using MongoDB
const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Author', authorSchema)