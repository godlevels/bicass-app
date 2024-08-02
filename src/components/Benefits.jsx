import { benefitsData } from "../constants"
import subIcon from "../assets/sub.png"
import benefitImg from "../assets/ben.png"

const Benefits = () => {
    return (
        <div className="bg-white py-14 w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 w-[471px] h-[452px] left-[130px] top-[2761px] flex flex-col gap-y-8">
        <h2 className="text-[3.13rem] text-left text-textSec font-bold mb-4 w-[429px] h-[122px] top-[2761px] leading-[3.81rem]">What Benefit Will You Get</h2>
        <ul>
          {benefitsData.map((benefit, index) => (
            <li key={index} className="flex items-center py-2 gap-x-3 mb-2">
              <img src={subIcon} className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-left text-[1.13rem] text-textSec font-medium w-[419px] h-[30px] top-[2934px]">{benefit}</span>

            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 relative">
        <img src={benefitImg} alt="" />
      </div>
    </div>
    )
}

export default Benefits
