import { featuresData } from "../constants";

const Features = () => {
  return (
    <div className="bg-white py-14 w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-[2rem] md:text-[3.13rem] text-textSec font-semibold mb-2 w-full md:w-[331px] h-auto md:h-[122px] leading-tight md:leading-[3.80rem]">
          Our Features you can get
        </h2>
        <p className="text-textPri text-[1rem] md:text-[1.13rem] text-left font-medium leading-relaxed md:leading-[1.88rem] w-full md:w-[461px] h-auto md:h-[90px] mt-4 md:mt-0">
          We offer a variety of interesting features that can help increase your productivity at work and manage your project easily.
        </p>
        <button className="bg-green text-whiteD text-lg font-medium leading-snug px-8 py-4 rounded-full mt-4 md:mt-0">
          Get Started
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row justify-around items-center">
        {featuresData.map((feature, index) => (
          <div key={index} className="max-w-sm text-center mb-8 md:mb-0">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full md:w-[364px] h-auto md:h-[430px] object-cover rounded-t-[20px]"
            />
            <h3 className="text-[1.5rem] md:text-[1.88rem] text-left text-textSec font-semibold w-full md:w-[282px] h-auto md:h-[30px] leading-tight md:leading-[1.88rem] my-5">
              {feature.title}
            </h3>
            <p className="text-left text-[1rem] md:text-[1.13rem] text-textPri font-medium leading-relaxed md:leading-[1.88rem] w-full md:w-[340px] h-auto md:h-[60px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
