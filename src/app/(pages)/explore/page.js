import "../../globals.css"
import CoursesPage from "../courses/page";
import GenderSort from "@/app/_gender/page";


const ExplorePage = () => {

    return(
        <div style={{
            fontFamily: "poppins"
        }}>
            <div>                
                <GenderSort />
                <CoursesPage />
            </div>
        </div>
    )
}
export default ExplorePage;