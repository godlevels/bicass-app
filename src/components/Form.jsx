import formIcon from "../assets/euro.png"


const Form = () => {
    return (
        <div className="flex items-center">
            <div className="bg-[#222938] p-8 rounded-lg shadow-lg w-[612px] h-[588px] top-[4763px] left-[697px]">
                <div className="flex justify-center mb-4">
                    {/* Add your icon here */}
                    <img src={formIcon} alt="Icon" className="w-[72.06px] h-[86px] top-[40px] left-[269px]" />
                </div>
                    <h2 className="text-[30px] text-center text-white font-medium leading-[36.31px] mb-6">Get Started</h2>
                <form className="flex flex-col items-center justify-center">
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-white text-[18px] text-left font-medium leading-[21.78px] mb-4 w-[51px] h-[22px] top-[182px] left-[86px]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-[440px] h-[50px] left-[86px] top-[224px] px-3 py-2 text-textPri bg-[#fff] rounded-[10px] focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-white text-[18px] text-left font-medium leading-[21.78px] w-[78px] h-[22px] top-[294px] left-[86px] mb-4">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-[440px] h-[80px] top-[336px] left-[86px] px-3 py-2 text-textPri bg-white rounded-[10px] focus:outline-none focus:shadow-outline"
                            placeholder="What are you say ?"
                        />  
                    </div>
                    <button
                        type="submit"
                        className="w-[440px] h-[60px] top-[436px] left-[86px] bg-green hover:bg-green/100 text-white text-[16px] font-semibold leading-[19.36px] py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline flex justify-center items-center"
                    >
                        Request Demo
                    </button>
                </form>
                <div className="text-right mt-4">
                    <a href="#" className="text-sm text-textPri hover:text-gray-200 w-[117px] h-[16px] top-[506px] mr-[3.50rem]">
                        or <span className="text-white">Start Free Trial</span>
                    </a>
                </div>
            </div>
        </div>
        )
    }

export default Form
