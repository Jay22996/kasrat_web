import About from "../../../compornent/about";
import GymList from "../../gym/gymlist/gymlist";
import Gallary from "../gallary/gallary";
import Review from "../review/review";
import Intro from "../intro/intro";
import GymRegister from "../../gymregister/gymregister";

const Home = () => {
    
    return (
        <>
            <Intro />
            <GymList />
            <About />
            <Gallary />
            <Review />
            <GymRegister />
        </>
    )

}

export default Home;