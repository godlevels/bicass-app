import { supportData } from "../constants";

const Support = () => {
    return (
        <div className="w-full h-[32rem] lg:px-24 md:px-16 sm:px-6 px-4 lg:py-4 md:py-4 sm:py-1 py-1 sticky top-0 font-[inter] bg-supBg">
            <div className="flex w-[90rem] gap-x-10 mt-8">
                <div className="w-[40.2rem]">
                    <div className="text-left mb-8">
                        <h2 className="text-[3.1rem] text-left text-textSec font-semibold leading-[3.8rem]">{supportData.title}</h2>
                        <p className="text-[1rem] text-left text-textPri font-medium leading-[1.88rem] my-4">{supportData.description}</p>

                    </div>
                    <div className="flex flex-col gap-x-16 md:flex-row items-center">
                        {supportData.ratings.map((rating, index) => (
                            <div key={index} className="md:mb-0">
                                <div className="text-yellow-500 text-xl mb-2">
                                    {'★'.repeat(Math.floor(rating.stars))}{'☆'.repeat(5 - Math.floor(rating.stars))}
                                </div>
                                <p className="text-[1.13rem] text-textSec text-left font-bold leading-[1.36rem]">{rating.rating} <span className="text-[1.13rem] text-textSec text-left font-normal leading-[1.36rem]">{rating.rate}</span></p>
                                <p className="text-textPri text-[1.13rem] text-left font-bold leading-[1.36rem] my-3">{rating.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[509px] h-[411px] flex flex-col gap-y-7 mt-5">
                    {supportData.features.map((feature, index) => (
                        <div key={index} className="md:mb-0 md:mr-4 flex gap-x-4">
                            <img src={feature.icon} alt="" className="w-[60px] h-[60px] flex items-center" />
                            <div>
                                <h3 className="text-[1.75rem] text-textSec text-left font-bold mb-2 leading-[2.12rem]">{feature.title}</h3>
                                <p className="text-textPri text-[1.13rem] font-medium leading-[1.90rem]">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Support
