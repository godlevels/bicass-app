import { benefitsData } from "../constants";
import subIcon from "../assets/sub.png";
import benefitImg from "../assets/ben.png";

const Benefits = () => {
  return (
    <div className="bg-white py-14 w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 w-full flex flex-col gap-y-8 mb-8 md:mb-0">
        <h2 className="text-[2rem] md:text-[3.13rem] text-left text-textSec font-bold mb-4 leading-tight md:leading-[3.81rem]">
          What Benefit Will You Get
        </h2>
        <ul>
          {benefitsData.map((benefit, index) => (
            <li key={index} className="flex items-center py-2 gap-x-3 mb-2">
              <img src={subIcon} className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-left text-[1rem] md:text-[1.13rem] text-textSec font-medium leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
        <img src={benefitImg} alt="Benefit" className="w-full max-w-md md:max-w-none" />
      </div>
    </div>
  );
}

export default Benefits;
