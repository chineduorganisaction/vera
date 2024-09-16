"use client"
import { Email, Key } from "@mui/icons-material";
import { useState } from "react";
import { mailLogin } from "../login/page";
import { useRouter } from "next/navigation";

const FormPage = ({formtype}) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")
    const [valid, setValid] = useState("none")
    const router = useRouter()

    function signLogic(e){
        e.preventDefault
        user !== "" ? router.push("/api/user") : router.push("/login")
    }
    
    return(
        <form action={signLogic} className="flex flex-col justify-around p-1">
            {
                formtype === "signup" ?
                (
                    <div>
                        <div className="flex justify-around items-center my-1 ">
                            <label>EMAIL</label>
                            <input placeholder={<Email />} type="text" onChange={e => e.target.value.includes("@") ? setUser(e.target.value) : setValid("flex")}
                            name="email" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" required/>
                        </div>
                        <div className="flex justify-around items-center my-1 ">
                            <label>USERNAME</label>
                            <input placeholder={<Email />} type="text" onChange={e => e.target.value.includes("@") ? setUser(e.target.value) : setValid("flex")}
                            name="username" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" required/>
                        </div>
                        <div className="flex justify-around items-center my-1">
                            <label>PASSWORD</label>
                            <input placeholder={<Key />} type="password" onChange={e => setPassword(e.target.value)}
                            name="password" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" required/>
                        </div>
                        <input type="submit" value="SUBMIT" className="w-full h-2/3 p-1 border-2 border-black rounded-lg bg-blue-400" />
                        <div style={{display: valid}}>Invalid Input(s)</div>
                    </div>
                ) :
                (
                    <div>
                        <div className="flex justify-around items-center my-1 ">
                            <label>EMAIL</label>
                            <input placeholder={<Email />} type="text" onChange={e => e.target.value.includes("@") ? setUser(e.target.value) : setValid("flex")}
                            name="email" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" required/>
                        </div>
                        <div className="flex justify-around items-center my-1">
                            <label>PASSWORD</label>
                            <input placeholder={<Key />} type="password" onChange={e => setPassword(e.target.value)}
                            name="password" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" required/>
                        </div>
                        <input type="submit" value="SUBMIT" className="w-full h-2/3 p-1 border-2 border-black rounded-lg bg-blue-400" />
                        <div style={{display: valid}}>Invalid Input(s)</div>
                    </div>
                )
            }
        </form>
    )
}
export default FormPage;