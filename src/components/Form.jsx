import formIcon from "../assets/euro.png"


const Form = () => {
    return (
        <div className="flex items-center">
            <div className="bg-[#222938] p-8 rounded-lg shadow-lg w-[612px] h-[588px] top-[4763px] left-[697]">
                <div className="flex justify-center mb-4">
                    {/* Add your icon here */}
                    <img src={formIcon} alt="Icon" className="w-12 h-12" />
                </div>
                    <h2 className="text-2xl text-center text-white mb-6">Get Started</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
                            placeholder="What are you say ?"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green hover:bg-green/100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Request Demo
                    </button>
                </form>
                <div className="text-center mt-4">
                    <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
                        or Start Free Trial
                    </a>
                </div>
            </div>
        </div>
        )
    }

export default Form
