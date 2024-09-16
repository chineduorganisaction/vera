import Image from "next/image";
import GenderSort from "@/app/_gender/page";
import FormPage from "../form/page";

const SignupPage = () => {
    
    return(
        <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            alignItems: "center", backgroundColor: "rgb(245,155,69)",
            fontFamily: "poppins"
        }} className="h-screen">
            <GenderSort />
            <div className="flex relative items-center justify-center bg-[whitesmoke] rounded-lg flex-col
            h-[60%] w-[60%] md:w-[50%] md:justify-between md:flex-row md:p-2
            ">
                <div className="py-2 w-3/4 rounded-lg flex border-2 border-gray-400 items-center justify-center uppercase
                font-bold z-10 md:w-2/3 md:mr-2 shadow-2xl, cursor-pointer bg-[rgb(255,255,255,0.6)]
                ">
                    <FormPage formtype="signup"/>
                </div>
                <div className="absolute w-full h-full bg-[rgb(255,110,57)] justify-center items-center
                flex md:relative md:w-3/4 rounded-lg flex-col
                ">
                    <Image src={"/login-model.png"} alt="login" width={600} height={600}/>
                    <div>grow your career with <span className="font-bold bg-blue-400 px-1 rounded-sm">VERA</span></div>
                </div>
            </div>
        </div>
    )
}
export default SignupPage;

export const mailLogin = async (e) => {
    e.preventdefault;
    //===== FETCH API =======
    const data = await fetch("/api/user").then((value) => {
        return value.text()
    })
    console.log(data)    
}