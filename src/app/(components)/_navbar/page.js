const NavBarPage = ({data}) => {


    const rightside = [
        {
            "title": "Home",
            "link": "/"
        },
        {
            "title": "Explore",
            "link": "/explore"
        },
        {
            "title": "About-us",
            "link": "/about-us"
        }
        
    ]
    const leftside = [
        {
            "title": "Signup",
            "link": "/signup"
        },
        {
            "title": "Login",
            "link": "/login"
        }
    ]

    return(
        <ul className="block md:flex justify-between cursor-pointer">            
            {
                data === "rightside" ? (
                    rightside.map((value, index, array) => {
                        return(
                            <li key={index} className="text-uppercase flex font-[montserrat] font-extrabold px-1">
                                <a href={value.link}>{value.title}</a>
                            </li>
                        )
                    })
                ) : (
                    leftside.map((value, index, array) => {
                        return(
                            <li key={index} className="text-uppercase flex font-[montserrat] font-extrabold px-1">
                                <a href={value.link}>{value.title}</a>
                            </li>
                        )
                    })
                )
            }
        </ul>
    )
}
export default NavBarPage;