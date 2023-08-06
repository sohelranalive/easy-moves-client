import Association from "../Association/Association";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Statistics from "../Statistics/Statistics";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Association></Association>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;