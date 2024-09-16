"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const CoursesPage = () => {

    const [courseCategory, setCourseCategory] = useState([])
    useEffect(
        () => {
            import('/data/courses.json')
            .then((value) => {
                console.log(value)
                const {category} = value
                setCourseCategory(category)
            })
        }, []
    )
    return(
        <div className="flex flex-wrap md:col-3 w-full p-4">
            {
                courseCategory.map((value, index, array) => {
                    return(
                        <div key={index} className="shadow-lg backdrop-blur-xl md:w-1/5 mx-4 flex flex-col 
                        items-center p-4 bg-[#d5d5d5]"
                        >
                            <div>
                                <Image src={value.image_cover} alt={value.title} width={150} height={200} />
                            </div>
                            <div>
                                <div className="uppercase font-bold">{value.title}</div>
                                <div>{value.description}</div>
                                <a href={value.link}><button className="bg-black w-full p-2 rounded-lg text-white" >view more</button></a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CoursesPage;