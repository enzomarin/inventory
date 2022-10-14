//const mongoose = require('mongoose')
import mongoose from 'mongoose'
const {Schema, model} = mongoose

const userSchema = new Schema({
    _id: {type:String, _id:false},
    name: {type: String, require: true},
    surname: {type: String, require: true},
    username: {type:String, require:true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    isAdmin: {type:Boolean, default: false}
})

const UserModel = model("User", userSchema)

export default UserModel