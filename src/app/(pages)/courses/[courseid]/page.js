import Image from "next/image";

const CourseIdPage = async ({params}) => {

    const courseid = params.courseid
    const data = await import("/data/courses.json");
    const course = data[courseid]
    console.log(course)
    return(
        <div className="p-4 flex flex-wrap md:col-3 w-full">
            {
                course.map((value, index, array) => {
                    console.log(array.length)
                    return(
                        <div key={index} className="shadow-lg backdrop-blur-xl md:w-1/4 mx-4 flex flex-col 
                        items-center p-4 bg-[#d5d5d5]">
                            <div>
                                <Image src={value.image_cover} alt={value.title} width={150} height={200} />
                            </div>
                            <div>
                                <div className="uppercase font-bold">{value.title}</div>
                                <div>{value.description}</div>
                                <a href={value.link}><button className="bg-black w-full p-2 rounded-lg text-white">view more</button></a>       
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CourseIdPage;