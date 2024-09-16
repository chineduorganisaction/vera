import HeroContentPage from "./(components)/_hero/page";
import PartnersPage from "./(components)/_partners/page";
import FuturePlanPage from "./(components)/_plans/page";
import ProjectPage from "./(components)/_programs/page";
import SliderPage from "./(components)/_slider/page";
import "./globals.css"
export const metadata = {
    title: "VERA E-LEARNING",
    description: "An Academy For Solutions"
}

const HomePage = () => {
    return(
        <div className="p-2">
            <SliderPage />
            <HeroContentPage />
            <FuturePlanPage />
            <ProjectPage />
            <PartnersPage />
        </div>
    )
}

export default HomePage;