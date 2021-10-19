import MoviesGrid from "../components/MoviesGrid";
import { Search } from "../components/Search";

function LandingPage() {
    return (
        <div>
            <Search/>
            <MoviesGrid/>
        </div>
    )
}

export default LandingPage;