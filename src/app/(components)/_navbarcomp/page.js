"use client"
import { MenuOutlined } from "@mui/icons-material"
import NavBarPage from "../_navbar/page"
import { useState } from "react"

const NavBarCompPage = () => {
    const [activeBox, setActiveBox] = useState("hidden")
    return(
        <nav>
          <div className="
            bg-[rgba(255,255,255,0.2)] p-6 shadow-lg shadow-slate-400 flex justify-between
            backdrop-blur-xl flex-3 items-center w-full z-[8em]
          ">
            <div className="text-uppercase font-black font-[montserrat] w-2/3" >VERA</div>
            <div className="flex w-full justify-end md:justify-start">

              <div className="block md:hidden">
                <div className="block md:hidden" onClick={
                  (e) => {
                    if(activeBox === "block"){
                        return setActiveBox("hidden")
                    }else{
                        return setActiveBox("block")
                    }
                  }
                }
                >
                  <MenuOutlined />
                </div>
                <div className={`${activeBox} z-[10em] absolute p-6 flex flex-col shadow-md shadow-slate-400 
                backdrop-blur-xl right-0 top-[4.8em] bg-slate-900 text-slate-100`}>
                  <NavBarPage data={"rightside"}/>
                  <NavBarPage data={"leftside"}/>
                </div>
              </div>

              <div className="hidden md:flex md:justify-between md:w-full">
                <NavBarPage data={"rightside"}/>
                <NavBarPage data={"leftside"}/>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default NavBarCompPage;