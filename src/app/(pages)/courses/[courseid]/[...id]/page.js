import Image from "next/image";

const Course = async ({params}) => {

    const coursecategoryparams = params.courseid
    const [courseparams] = params.id
    const data = await import("../../../../../../data/courses.json");
    const sortedcoursecategoryparams = data[coursecategoryparams]
    return(
        <div className="p-10">
            {
                sortedcoursecategoryparams.map((value, index, array) => {
                    const sortvalue = value.link
                    if(sortvalue.includes(courseparams)) {
                        
                        return(
                            <div key={index} className="w-full">
                                <div className="w-full flex justify-center">
                                    <iframe src={value.video} className="flex w-2/3" height={300}></iframe>
                                </div>
                                <div className="py-4">
                                    <div className="uppercase font-extrabold font-[montserrat] text-lg flex justify-center">{value.title}</div>
                                    <div>{value.label}</div>
                                    <div className="rounded-lg border-black border-2 w-1/5 flex justify-center font-bond my-4"><a href={value.video}>continue reading</a></div>                                      
                                </div>
                            </div>
                        )
                    }else{
                        return("")
                    }
                })
            }
        </div>
    )
}
export default Course;