const mongoose = require('mongoose')


//This is basically creating a table but using MongoDB
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    publishdate:{
        type:Date,
        required:true
    },
    pageNumber:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default: Date.now
    },
    coverImageName:{
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})

module.exports = mongoose.model('Book', bookSchema)