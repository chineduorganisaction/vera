"use client"
import { Email, Key } from "@mui/icons-material";
import { mailLogin } from "../login/page";
import { useState } from "react";

const FormPage = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")
    
    return(
        <form onSubmit={mailLogin} className="flex flex-col justify-around p-1">
            <div className="flex justify-around items-center my-1 ">
                <label>EMAIL</label>
                <input placeholder={<Email />} type="text" value={user} onChange={e => setUser(e.target.value)}
                name="email" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" />
            </div>
            <div className="flex justify-around items-center my-1">
                <label>PASSWORD</label>
                <input placeholder={<Key />} type="password" value={password} onChange={e => setPassword(e.target.value)}
                name="password" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" />
            </div>
            <input type="submit" value="SUBMIT" className="w-full h-2/3 p-1 border-2 border-black rounded-lg bg-blue-400" />
        </form>
    )
}
export default FormPage;