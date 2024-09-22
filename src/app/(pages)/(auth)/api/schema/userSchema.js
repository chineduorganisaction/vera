import mongoose, { Schema } from "mongoose"

// create schema for data
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    gender: String
})

// create schema for mongodb
const User = mongoose.model("User", userSchema)
export default User