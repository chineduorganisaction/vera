const HeroContentPage = () => {
    const hero = ['/hero1.jpg.jpg', '/hero2.jpg', '/hero3.jpg']
  return (
    <div className="md:flex py-6">
        <div className="md:w-1/2 px-2 md:px-4 font-bold font-[poppins]">
            VERA E-Learning platform is a community established to empower female genders on the essence
            of ever changing work force which incorperates technology through 
            various mediums such as mathematics for statistics, data science for catalogues 
            and improved business systemic ideas. We aim to empower over 50million females before 2035 worldwide.
        </div>
        <div className="flex md:w-1/2 py-4 md:py-0 flex-wrap">
            {
                hero.map((value, index, array) => {
                    return <img src={value} alt={value} key={index} className="w-full md:w-1/3 rounded-xl p-2" />
                })
            }
        </div>
    </div>
  )
}

export default HeroContentPage