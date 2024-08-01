import { featuresData } from "../constants";

const Features = () => {
    return (
        <div className="bg-white py-14 w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[3.13rem] text-textSec font-semibold mb-2 w-[331px] h-[122px] leading-[3.80rem]">Our Features you can get</h2>
            <p className="text-textPri text-[1.13rem] text-left font-medium leading-[1.88rem] w-[461px] h-[90px]">
              We offer a variety of interesting features that can help increase your productivity at work and manage your project easily.
            </p>
            <button className="bg-green text-whiteD text-lg font-medium leading-snug px-8 py-4 rounded-full">
                Get Started
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-around items-center h-[570px] left-[130px]">
            {featuresData.map((feature, index) => (
              <div key={index} className="max-w-sm text-center mb-8 md:mb-0">
                <img src={feature.image} alt={feature.title} className="w-[364px] h-[430px] object-cover top-[2061px] left-[130px] rounded-t-[20px]" />
                <h3 className="text-[1.88rem] text-left text-textSec font-semibold w-[282px] h-[30px] top-[2521px] leading-[1.88rem] my-5">{feature.title}</h3>
                <p className="text-left text-[1.13rem] text-textPri font-medium leading-[1.88rem] h-[60px] w-[340px] top-[2571px]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Features
