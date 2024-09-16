const PartnersPage = () => {
    const partners = [
        {
            "title": "microsoft",
            "logo": "/microsoft.jpg",
            "ref": "www.microsoft.com"
        },
        {
            "title": "ibm",
            "logo": "/ibm.png",
            "ref": "www.ibm.com"
        },
        {
            "title": "nvidia",
            "logo": "/nvidia.png",
            "ref": "www.nvidia.com"
        },
        {
            "title": "jp morgan",
            "logo": "/jp-morgan.png",
            "ref": "www.jp-morgan.com"
        }
    ]
  return (
    <div className="p-4">
        <div className="uppercase font-[montserrat] font-extrabold text-2xl flex justify-center">partners</div>
        <div className="md:flex">
            {
                partners.map((value, index, array) => {
                    return <div className="md:w-1/4 flex flex-col items-center py-4 md:py-0" key={index}>
                        <a href={value.ref} className="h-20"><img src={value.logo} alt={value.title} className="h-full"/></a>
                        <div className="uppercase font-extrabold flex justify-center">{value.title}</div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default PartnersPage