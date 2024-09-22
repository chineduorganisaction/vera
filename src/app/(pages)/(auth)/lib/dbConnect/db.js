import { mongoose } from "mongoose"

// create database connections
const dbConnects = () => {
    // confirm if mongodb is established connection
    const conn = mongoose.connection.readyState
    if (conn === 1) {
        return new Response("connected to previous")
    } else {
        // create new connection
        mongoose.connect(
            process.env.MONGODB_URI,
            { autoIndex: true }
        )
        console.log("new connection established")
        return new Response("connected")
    }
}

export default dbConnects