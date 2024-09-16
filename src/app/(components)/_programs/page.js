const ProjectPage = () => {
    const programs = [
        {
            "title": "she codes",
            "context": `SHE-CODE was a successful 
                        program that manged to educates 12,000 
                        female youth in website application development 
                        with proper mentoring. 15 females have taken 
                        professional intership under reliable companies.`,
            "ref": "/she-codes"
        },
        {
            "title": "her-verse",
            "context": `SHE-CODE was a successful 
                        program that manged to educates 12,000 
                        female youth in website application development 
                        with proper mentoring. 15 females have taken 
                        professional intership under reliable companies.`,
            "ref": "/her-verse"
        },
        {
            "title": "hernovate",
            "context": `SHE-CODE was a successful 
                        program that manged to educates 12,000 
                        female youth in website application development 
                        with proper mentoring. 15 females have taken 
                        professional intership under reliable companies.`,
            "ref": "/hernovate"
        }
    ]
  return (
    <div className="my-4">
        <div className="uppercase flex justify-center font-extrabold font-[montserrat] text-2xl"> our programs</div>
        <div className="md:flex w-full font-[poppins]">
            {
                programs.map((value, index, array) => {
                    return <div key={index} className="md:w-1/3 p-2 m-2 shadow-lg shadow-slate-400 backdrop-blur-xl
                    rounded-lg border-grey-400 border-2">
                        <div className="font-extrabold flex justify-center uppercase text-lg">{value.title}</div>
                        <div>{value.context}</div>
                        <div className="rounded-lg border-black border-2 w-1/4 flex justify-center font-bold my-4">
                            <a href={value.ref}>view more</a>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default ProjectPage