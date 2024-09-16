import mongoose from "mongoose"
import { redirect } from "next/navigation"
import User from "../schema/page"

// create mongodb server
mongoose.connect(
    process.env.MONGODB_URI
)


// create user data with post request to database
export async function POST(request) {
    const { username, password, email, gender } = request.body
    const user = await new User({
        username,
        password,
        email,
        gender
    }).save()

    return new Response("successfully registered!")
}
