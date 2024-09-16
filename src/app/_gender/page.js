"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const GenderSort = () => {
    const router = useRouter()
    const [valueState, setValueState] = useState("")

    if (typeof window !== "undefined"){
        const currentGender = localStorage.getItem("gender");
        useEffect(
            () => {
                setValueState(currentGender);
            }, []
        )
    }
    function sortGender(e) {
        if (e.target.name === "female"){
            localStorage.setItem("gender", e.target.name)
            return setValueState(e.target.name)
        }else{
            return router.push("/");
        }
    }

    return(
        <div style={{
            fontWeight: "bold", position: "absolute", zIndex: 40,
            background: "rgba(255,255,255,0.7)", width: "100vw",
            height: "100%", display: `${valueState === "female"? "none" : "flex"}`, flexDirection: "column",
            justifyContent: "center", alignItems: "center"
        }} id="gender">
            <div style={{
                fontWeight: "bolder", fontSize: 20, display: "flex",
                flexWrap: "wrap"
            }}>
                PLEASE IDENITFY YOUR GENDER TO PROCEED
            </div>
            <div style={{
                display: "flex", justifyContent: "space-between", width: "30vw"
            }}>
                <div>
                    <input type="checkbox" id="male" name="male" onClick={sortGender} />
                    <label>MALE</label>
                </div>
                <div>
                    <input type="checkbox" id="female" name="female" onClick={sortGender} />
                    <label>FEMALE</label>
                </div>
            </div>
        </div>
    )
}
export default GenderSort;