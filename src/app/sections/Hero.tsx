import CategoryList from "../components/CategoryList";
import HeroSection from "../components/HeroComponent";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row container mx-auto">
            <div className="w-full md:w-1/4">
                <CategoryList />
            </div>
            <div className="w-full md:w-3/4">
                <HeroSection />
            </div>
        </div>
    )
}

export default Hero;