import hero from "../assets/hero.png"
import Pizza from "../assets/pixzolo-photography-3tL4vtrFqTQ-unsplash.jpg"

const Hero = () => {
    return (
        <div className="relative">
            <img src={Pizza} className="
            w-full max-h-[600px] object-cover object-cover" alt="hero image
            "/>
            <div className="absolute top-20 left-20 text-lg flex flex-col font-bold text-orange-500 gap-2">
                <span className="text-3xl">Indulge Your <span className="bg-orange-500 text-white py-2 px-2 rounded-lg">Cravings,</span></span>
                <span className="text-2xl">Anytime, Anywhere</span>
            </div>
        </div>
    );
};
export default Hero;