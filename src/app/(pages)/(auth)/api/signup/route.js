import { redirect } from "next/navigation"
import dbConnects from "../../lib/dbConnect/db"
import User from "../schema/userSchema"

// create user data with post request to database
export async function POST(request) {
    // initialize db
    await dbConnects()

    const body = await request.json()
    const isExist = await User.findOne( {username: body.username} )
    console.log(isExist)
    if (isExist === null) {
        const member = new User({
            username: body.username,
            password: body.password,
            email: body.email,
            gender: body.gender
        })
        await member.save()
        console.log(member.username + ", your account has been created")
        return new Response(JSON.stringify(member.username))
    } else {
        return new Response("already exist")
    }
    
}