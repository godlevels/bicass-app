import { footerData } from "../constants"
import logo from "../assets/logo.png"
import emailIcon from "../assets/arrow.png"


const Footer = () => {
    return (
        <footer className="bg-[#161C28] text-textPri py-4">
            <div className="container mx-auto px-4">
                <div className="flex gap-x-40">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="text-xl font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
                            <img src={logo} alt="" />
                        </a>
                        <p className="my-5 h-[30px] w-[286px] top-[5581px] left-[130px]">Get started now try our product</p>
                        <form className="flex items-center w-[410px] h-[60px] top-[5641px] left-[130px] border-2 rounded-[70px] pl-4 pr-1">
                            <input
                                type="email"
                                className="w-full p-2 bg-inherit text-white focus:outline-none"
                                placeholder="Enter your email here"
                            />
                            <img src={emailIcon} alt="" />
                        </form>
                    </div>
                    <div className="flex items-center gap-x-16 w-[587px] h-[200px] top-[5521px] left-[697px]">
                        {footerData.map((section, index) => (
                            <div key={index} className="mb-6 md:mb-0">
                                <h3 className="text-white text-[18px] text-left font-medium leading-[21.78px] mb-5">{section.title}</h3>
                                <ul>
                                    {section.links.map((link, idx) => (
                                        <li key={idx} className="mb-2">
                                            <a href={link.url} className="text-textPri text-[18px] text-left font-medium leading-[21.78px] hover:text-white">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between mt-8">
                    <p className="text-[18px] text-left text-white font-medium leading-[30px] w-[425px] h-[30px] top-[5780px] left-[130px]">&copy; 2022 Biccas Inc. Copyright and rights reserved</p>
                        <div className="text-[18px] text-white text-left font-medium mt-4 md:mt-0 w-[331px] h-[30px] top-[5780px] left-[979px]">
                            <a href="#" className="hover:text-textPri mr-4">Terms and Conditions</a>
                            <a href="#" className="hover:text-textPri">Privacy Policy</a>
                        </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
