import { heroData } from "../constants"; 
import underLay from "../assets/curve.png";
import heroImg from "../assets/hero.png";
import playIcn from "../assets/play.png";

const Hero = () => {
    return (
        <main className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center py-16 w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4">
            <div className="lg:w-1/2 w-full text-center lg:text-left">
                <h1 className="text-4xl lg:text-[5rem] md:text-[5rem] font-extrabold leading-tight mb-6">
                    {heroData.heading}
                </h1>
                <div className="flex justify-center lg:justify-start">
                    <img src={underLay} alt="" className="w-3/4 lg:w-full" />
                </div>
                <p className="text-lg text-blackD font-medium leading-relaxed my-8 lg:w-[435px] w-full">
                    {heroData.subtext}
                </p>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-x-10 justify-center lg:justify-start">
                    <button className="bg-green text-whiteD text-lg font-medium leading-snug px-8 py-4 rounded-full">
                        Try free Trial
                    </button>
                    <button className="flex items-center gap-3 text-blackD text-lg font-medium justify-center">
                        <img src={playIcn} alt="" className="w-6 h-6" />
                        <span>View Demo</span>
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <img src={heroImg} alt="" className="w-full max-w-md lg:max-w-full object-cover" />
            </div>
        </main>
    );
};

export default Hero;
