import hero from "../assets/hero.png"
import Pizza from "../assets/pixzolo-photography-3tL4vtrFqTQ-unsplash.jpg"

const Hero = () => {
    return (
        <div className="relative">
            <img src={Pizza} className="
            w-full max-h-[600px] object-cover object-cover" alt="hero image
            "/>
            <div className="absolute top-20 left-20 text-lg flex flex-col font-bold 
            bg-gradient-to-r from-orange-400
         to-orange-600
            text-transparent bg-clip-text
            gap-5">
                <span className="text-3xl  flex gap-2 flex-col">Indulge Your Cravings,</span>
                <span className="text-2xl">Anytime, Anywhere</span>
            </div>
        </div>
    );
};
export default Hero;