import { useState } from "react";
import logo from "../assets/logo.png"
import { Menu, X } from "lucide-react";
import { navLinks, navBtns } from "../constants";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
   
  return (
    <>
        <nav className="w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4 lg:py-4 md:py-4 sm:py-1 py-1 sticky top-0 font-[inter]">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
            <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
                <a href="/" className="text-xl font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
                  <img src={logo} alt="" />
                </a>
                <div className="md:hidden">
                <button
                    className="p-2 text-[#000b41] rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                >
                    {navbar ? (
                    <X className="cursor-pointer" size={24} />
                    ) : (
                    <Menu className="cursor-pointer" size={24} />
                    )}
                </button>
                </div>
            </div>
            </div>
            <div
            className={`flex justify-between items-center md:block ${
                navbar ? "block" : "hidden"
            }`}
            >
              <div className="lg:flex md:block sm:block block items-center gap-x-[6rem]">
                <ul className="list-none lg:flex md:flex sm:block block items-center gap-y-16 gap-x-[3rem]">
                    {navLinks.map((item, index) => (
                    <li key={index}>
                        <a
                        href={item.id}
                        className="text-textPri text-lg font-medium hover:text-green ease-out duration-700 active:text-textSec"  
                        >
                        {item.title}
                        </a>
                    </li>
                ))}
                </ul>

                <ul className="list-none lg:flex md:flex sm:block block items-center gap-y-16 gap-x-[2rem]">
                  {navBtns.map((btn, index) => (
                      <li key={index}>
                        <a
                          href={btn.id}
                          className={btn.style}
                        >
                          {btn.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
        </div>
        </nav>
    </>
  );
};

export default Navbar;
