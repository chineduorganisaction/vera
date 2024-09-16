import { redirect } from "next/navigation"
import User from "../schema/page"

// search for existing user
export function POST(request, response) {
    const user = User.findOne( request.body.username )
    if(user === "") {
        return redirect("/signup")
    }
    else{
        return Response.json({user})
    }
}
