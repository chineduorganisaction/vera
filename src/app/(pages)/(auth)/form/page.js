"use client"
import { Email, Key } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormPage = ({formtype}) => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [valid, setValid] = useState("none")
    const router = useRouter()

    function signupLogic(e){
        e.preventDefault
        const gender = localStorage.getItem("gender")
        fetch(
            "/api/signup",
            {
                "headers": {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "body": JSON.stringify({
                    "username": user,
                    "email": email,
                    "password": password,
                    "gender": gender
                })
            }
        ).then((value) => {
            const userText = value.text()
            console.log(userText)
            return router.push("/login")
        })
                
    }
    function loginLogic(e){
        e.preventDefault
        fetch(
            "/api/signin",
            {
                "headers": {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "body": JSON.stringify({
                    "username": user,
                    "password": password
                })
            }
        ).then((value) => {
            const userText = value.text()
            console.log(userText)
            return router.push("/dashboard")
        })
    }
    
    return(
        <div>
            {
                formtype === "signup" ? (
                    <form action={signupLogic} className="flex flex-col justify-around p-1">
                        <div>
                            <div className="flex justify-around items-center my-1 ">
                                <label>EMAIL</label>
                                <input placeholder="" type="text" onChange={e => e.target.value.includes("@") ? setEmail(e.target.value) : setValid("flex")}
                                name="email" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" required/>
                            </div>
                            <div className="flex justify-around items-center my-1 ">
                                <label>USERNAME</label>
                                <input placeholder="" type="text" onChange={e => setUser(e.target.value) }
                                name="username" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" required/>
                            </div>
                            <div className="flex justify-around items-center my-1">
                                <label>PASSWORD</label>
                                <input placeholder="" type="password" onChange={e => setPassword(e.target.value)}
                                name="password" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" required/>
                            </div>
                            <input type="submit" value="SUBMIT" className="w-full h-2/3 p-1 border-2 border-black rounded-lg bg-blue-400" />
                            <div style={{display: valid}}>Invalid Input(s)</div>
                        </div>
                    </form>
                ) : (
                    <form action={loginLogic} className="flex flex-col justify-around p-1">                        
                        <div>
                            <div className="flex justify-around items-center my-1 ">
                                <label>USERNAME</label>
                                <input placeholder="" type="text" onChange={e => setUser(e.target.value)}
                                name="email" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" required/>
                            </div>
                            <div className="flex justify-around items-center my-1">
                                <label>PASSWORD</label>
                                <input placeholder="" type="password" onChange={e => setPassword(e.target.value)}
                                name="password" className="ml-1 w-full h-2/3 p-1 border-2 border-black rounded-lg" required/>
                            </div>
                            <input type="submit" value="SUBMIT" className="w-full h-2/3 p-1 border-2 border-black rounded-lg bg-blue-400" />
                            <div style={{display: valid}}>Invalid Input(s)</div>
                        </div>                
                    </form>
                )
            }
        </div>

        
    )
}
export default FormPage;