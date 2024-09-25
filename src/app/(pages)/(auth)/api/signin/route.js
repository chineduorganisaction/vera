import dbConnects from "../../lib/dbConnect/db"
import User from "../schema/userSchema"

// search for existing user
export async function POST(request) {
    // initialize db
    await dbConnects()

    const body = await request.json()
    const user = await User.findOne( {username: body.username} )
    console.log(user)
    if(user !== null && user.password === body.password) {
        localStorage.setItem("username", JSON.stringify(user.username))
        return new Response(JSON.stringify(user.username))
    }
    else{
        return new Response("no user found, create account")
    }
}
