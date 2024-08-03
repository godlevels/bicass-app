import { useState } from 'react';
import subIcon from "../assets/sub.png"
import { pricingData } from "../constants"

const Pricing = () => {
    const [billing, setBilling] = useState('monthly');
    const pricingPlans = pricingData[billing];
    return (
        <div className='py-14 w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4'>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[3rem] text-textSec text-center font-bold leading-[4.57rem] w-[492px] h-[146px]">
                    Choose Plan <br /> That’s Right For You
                </h1>
                <p className='text-[1.13rem] text-textPri text-center font-bold leading-[1.37rem] mt-5 mb-9'>Choose plan that works best for you, feel free to contact us</p>
            </div>
            <div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center mb-8 bg-slate-100 py-3 rounded-md shadow-md w-[340px] h-[70px] top-[3682px] left-[561px]">

                        <button
                            className={`px-4 py-2 mx-2 ${billing === 'monthly' ? 'bg-[#54BD95] rounded-md text-white text-[1.13rem] font-medium leading-[1.88rem] w-[160px]' : 'bg-inherit text-textSec text-[1.13rem] font-medium leading-[1.88rem]'}`}
                            onClick={() => setBilling('monthly')}
                        >
                            Bi Monthly
                        </button>
                        <button
                            className={`px-4 py-2 mx-2 ${billing === 'yearly' ? 'bg-[#54BD95] rounded-md text-white w-[160px] text-[1.13rem] font-medium leading-[1.88rem]' : 'bg-inherit rounded-md text-[1.13rem] font-medium leading-[1.88rem]'}`}
                            onClick={() => setBilling('yearly')}
                        >
                            Bi Yearly
                        </button>
                    </div>
                </div>
    
                <div className="flex flex-col md:flex-row justify-around items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className={`p-6 rounded-lg w-[374px] ${plan.popular ? 'border-green' : 'shadow-md'} ${plan.inverse ? 'bg-green text-white h-[644px] top-[3819px]' : 'bg-white text-gray-900 h-[604px] top-[3841px] mt-5'}`}>
                                    <div className='text-center flex flex-col items-center'>
                                        <h3 className="text-[30px] font-semibold leading-[36.31px] mb-2">{plan.title}</h3>
                                        <p className={`mb-4 w-[251px] text-[18px] font-medium leading-[27px] ${plan.popular ? "text-inherit" : "text-textPri"}`}>{plan.description}</p>
                                        <p className={`mb-2 leading-[30px] ${plan.popular ? "text-inherit" : "text-textPri"}`}>$<span className={`text-[50px] font-semibold ${plan.popular ? "text-inherit" : "text-textSec"}`}>{plan.price}</span></p>
                                        {plan.popular === true && (
                                            <div className='bg-[#85DAB9] w-[130px] h-[40px] top-[225px] left-[122px] rounded-[10px] flex justify-center items-center text-center text-[14px] font-semibold leading-[30px] mb-3'>Save $50 a year</div>
                                        )}
                                    </div>
                                <ul className={`mb-6 w-[334px] h-[360px] rounded-lg p-8 ${plan.popular ? "bg-[#fff] text-textSec" : "bg-[#F9FAFB]"}`}>
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="mb-4 flex items-center gap-x-4 w-[266px]">
                                            <img src={subIcon} alt="" className='w-6 h-6' />
                                            <span className='text-[18px] text-textSec text-left font-medium leading-[30px]'>{feature}</span>
                                        </li>
                                    ))}
                                    <button className={`mt-8 px-6 w-[266px] h-[55px] top-[4158px] left-[1004px] flex items-center justify-center rounded-[20px] text-center text-[18px] font-semibold leading-[30px] ${plan.inverse ? 'bg-green text-[#fff] hover:bg-[#fff] hover:text-green transition-all ease-out duration-200' : 'bg-[#fff] text-green hover:bg-green hover:text-[#fff] transition-all ease-out duration-200'}`}>
                                        {plan.buttonText}
                                    </button>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
