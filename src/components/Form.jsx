import formIcon from "../assets/euro.png";

const Form = () => {
    return (
        <div className="flex items-center justify-center px-4 md:px-8 py-4">
            <div className="bg-[#222938] p-8 rounded-lg shadow-lg w-[350px] max-w-full md:w-3/4 lg:w-[612px]">
                <div className="flex justify-center mb-4">
                    {/* Add your icon here */}
                    <img src={formIcon} alt="Icon" className="w-16 h-20 md:w-[72.06px] md:h-[86px]" />
                </div>
                <h2 className="text-2xl md:text-[30px] text-center text-white font-medium leading-tight md:leading-[36.31px] mb-6">Get Started</h2>
                <form className="flex flex-col items-center justify-center">
                    <div className="mb-6 w-full flex justify-center">
                        <div className="w-full md:w-11/12 lg:w-[440px]">
                            <label htmlFor="email" className="block text-white text-base md:text-[18px] font-medium mb-4">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full h-12 md:h-[50px] px-3 py-2 text-textPri bg-[#fff] rounded-[10px] focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="mb-6 w-full flex justify-center">
                        <div className="w-full md:w-11/12 lg:w-[440px]">
                            <label htmlFor="message" className="block text-white text-base md:text-[18px] font-medium mb-4">
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="w-full h-24 md:h-[80px] px-3 py-2 text-textPri bg-white rounded-[10px] focus:outline-none focus:shadow-outline"
                                placeholder="What are you say?"
                            />  
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button
                            type="submit"
                            className="w-full md:w-11/12 lg:w-[440px] h-12 md:h-[60px] bg-green hover:bg-[#6BC2A1] text-white text-base md:text-[16px] font-semibold rounded-[10px] focus:outline-none focus:shadow-outline flex justify-center items-center"
                        >
                            Request Demo
                        </button>
                    </div>
                </form>
                <div className="text-right mt-4 mr-[-.0.5rem] md:mr-[2rem] lg:mr-[3.4rem]">
                    <a href="#" className="text-sm text-textPri hover:text-gray-200">
                        or <span className="text-white">Start Free Trial</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Form;
