import { footerData } from "../constants";
import logo from "../assets/logo.png";
import emailIcon from "../assets/arrow.png";

const Footer = () => {
    return (
        <footer className="bg-[#161C28] text-textPri py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 md:gap-40">
                    <div className="mb-6 md:mb-0 flex-1">
                        <a href="/" className="text-xl font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
                            <img src={logo} alt="" />
                        </a>
                        <p className="my-5">Get started now, try our product</p>
                        <form className="flex items-center border-2 rounded-full pl-4 pr-1">
                            <input
                                type="email"
                                className="w-full p-2 bg-transparent text-white focus:outline-none"
                                placeholder="Enter your email here"
                            />
                            <button type="submit" className="p-2">
                                <img src={emailIcon} alt="Submit" />
                            </button>
                        </form>
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {footerData.map((section, index) => (
                            <div key={index} className="mb-6 md:mb-0">
                                <h3 className="text-white text-lg font-medium mb-5">{section.title}</h3>
                                <ul>
                                    {section.links.map((link, idx) => (
                                        <li key={idx} className="mb-2">
                                            <a href={link.url} className="text-textPri text-lg hover:text-white">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between mt-8">
                    <p className="text-lg text-white">&copy; 2022 Biccas Inc. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-4">
                        <a href="#" className="text-lg text-white hover:text-textPri">Terms and Conditions</a>
                        <a href="#" className="text-lg text-white hover:text-textPri">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
