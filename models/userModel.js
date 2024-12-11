const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    //name, email, age
    name : {
        type : String,
        required : true,
    },
    email : {
        type: String,
        required: true,
        unique : true
    },
    age: {
        type: Number,
        default: 0,
    }
}, { timestamps : true });

//createdAt
//updatedAt

module.exports = mongoose.model('User', userSchema)