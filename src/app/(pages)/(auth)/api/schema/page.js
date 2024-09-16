import mongoose, { Schema } from "mongoose"
// create schema for data
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    gender: String
})

// create connection to mongodb using schema
export default mongoose.models.User || mongoose.model("User", userSchema)
