const mongoose = require('mongoose')

const {Schema, model} = mongoose

const userSchema = new Schema({
    name: {type: String, require: true},
    surname: {type: String, require: true},
    username: {type:String, require:true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    isAdmin: {type:Boolean, default: false}
})

const userModel = model("User", userSchema)

export default userModel