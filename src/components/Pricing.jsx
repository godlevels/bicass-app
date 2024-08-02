import { useState } from 'react';
import subIcon from "../assets/sub.png"
import { pricingData } from "../constants"

const Pricing = () => {
    const [billing, setBilling] = useState('monthly');
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
                    {pricingData[billing].map((plan, index) => (
                        <div key={index} className={plan.bgStyle}>
                        <h3 className={`text-xl font-bold mb-2 ${plan.textStyle}`}>{plan.title}</h3>
                        <p className={`text-gray-500 mb-4 ${plan.textStyle}`}>{plan.description}</p>
                        <p className={`text-3xl font-bold mb-4 ${plan.textStyle}`}>{plan.price}</p>
                        {plan.save && <p className="text-green-500 mb-4">{plan.save}</p>}
                        <ul className="mb-6">
                            {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center mb-2">
                                <img src={subIcon} className="h-6 w-6 text-green-500 mr-2" />
                                <span className="text-gray-700">{feature}</span>
                            </li>
                            ))}
                        </ul>
                        <button className={`py-2 px-4 rounded-full ${plan.buttonClass}`}>
                            {plan.buttonText}
                        </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing
