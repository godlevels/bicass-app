/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { testimonials } from "../constants";
import textIcon from "../assets/quote.png"
import testImg from "../assets/play.png"

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

    const handleClick = (testimonial) => {
        setCurrentTestimonial(testimonial);
    };


    return (
        <div className="w-[466px] h-[588px] top-[4763] left-[130px] mt-3">
            <h1 className="text-[#fff] text-[50px] text-left font-semibold leading-[60.51px] mb-4 w-[444px] h-[122px] top-[4763px] left-[130px]">People are Saying About DoWhith</h1>
            <p className="text-textPri text-[18px] text-left font-medium leading-[30px] w-[461px] h-[60px] top-[4905px] left-[130px]">
                Everything you need to accept payment and grow your money of manage anywhere on planet
            </p>
            <div className="mb-8">
                <img src={textIcon} alt="" className="w-[45px] h-[38px] top-[5007] left-[135px] text-[#D9D9D9] my-10" />
                <p className="text-[18px] text-textPri text-left font-medium leading-[30px] mb-4 w-[451px] h-[90px] top-[5085px] left-[135px]">{currentTestimonial.text}</p>
                <p className="text-textPri text-[18px] text-left font-medium leading-[30px] w-[128px] h-[30px] top-[5215px] left-[135px]">_ {currentTestimonial.name}</p>
            </div>
            <div className="flex space-x-5 items-center">
                {testimonials.map((testimonial) => (
                    <img
                        key={testimonial.id}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={`w-12 h-12 rounded-full cursor-pointer ${
                        currentTestimonial.id === testimonial.id ? 'ring-1 ring-green' : ''
                        }`}
                        onClick={() => handleClick(testimonial)}
                    />
                ))}
                <button className="rounded-full ml-3">
                    <img src={testImg} alt="" className="w-[55px] h-[55px] top-[5285px] left-[479px] flex justify-center items-center" />
                </button>
            </div>
        </div>
    )
}

export default Testimonial
