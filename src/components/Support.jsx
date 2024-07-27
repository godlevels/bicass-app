import { supportData } from "../constants";

const Support = () => {
    return (
        <div className="w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4 lg:py-4 md:py-4 sm:py-1 py-1 sticky top-0 font-[inter] bg-supBg">
            <div className="flex w-[90rem] h-[33.8rem]">
                <div className="w-[40.2rem] h-[26.3rem]">
                    <div className="text-left mb-8">
                        <h2 className="text-[3.1rem] text-left text-textSec font-semibold leading-[3.8rem]">{supportData.title}</h2>
                        <p className="text-[1rem] text-left text-textPri font-medium leading-[1.88rem] my-4">{supportData.description}</p>

                    </div>
                    <div className="flex flex-col gap-x-16 md:flex-row items-center mb-8">
                        {supportData.ratings.map((rating, index) => (
                            <div key={index} className="mb-4 md:mb-0">
                                <div className="text-yellow-500 text-xl mb-2">
                                    {'★'.repeat(Math.floor(rating.stars))}{'☆'.repeat(5 - Math.floor(rating.stars))}
                                </div>
                                <p className="text-[1.13rem] text-textSec text-left font-bold leading-[1.36rem]">{rating.rating} <span className="text-[1.13rem] text-textSec text-left font-normal leading-[1.36rem]">{rating.rate}</span></p>
                                <p className="text-textPri text-[1.13rem] text-left font-bold leading-[1.36rem] my-3">{rating.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[509px] h-[411px]">
                    {supportData.features.map((feature, index) => (
                        <div key={index} className="mb-8 md:mb-0 md:mr-4 flex">
                            <img src={feature.icon} alt="" className="w-[30px] h-[30px] flex items-center" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Support
