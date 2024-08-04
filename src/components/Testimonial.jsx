import { useState } from "react";
import { testimonials } from "../constants";
import textIcon from "../assets/quote.png";
import testImg from "../assets/play.png";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

  const handleClick = (testimonial) => {
    setCurrentTestimonial(testimonial);
  };

  return (
    <div className="w-full max-w-[466px] h-auto mt-3 px-4 md:px-0">
      <h1 className="text-[#fff] text-[2rem] md:text-[3rem] text-left font-semibold leading-tight md:leading-[60.51px] mb-4 w-full md:w-[444px]">
        People are Saying About DoWhith
      </h1>
      <p className="text-textPri text-[1rem] md:text-[18px] text-left font-medium leading-relaxed md:leading-[30px] w-full md:w-[461px] mb-4">
        Everything you need to accept payment and grow your money of manage anywhere on planet
      </p>
      <div className="mb-8">
        <img src={textIcon} alt="" className="w-10 h-8 text-[#D9D9D9] my-6" />
        <p className="text-[1rem] md:text-[18px] text-textPri text-left font-medium leading-relaxed md:leading-[30px] mb-4">
          {currentTestimonial.text}
        </p>
        <p className="text-textPri text-[1rem] md:text-[18px] text-left font-medium leading-relaxed md:leading-[30px]">
          _ {currentTestimonial.name}
        </p>
      </div>
      <div className="flex flex-wrap gap-3 items-center">
        {testimonials.map((testimonial) => (
          <img
            key={testimonial.id}
            src={testimonial.image}
            alt={testimonial.name}
            className={`w-12 h-12 rounded-full cursor-pointer ${
              currentTestimonial.id === testimonial.id ? 'ring-2 ring-green' : ''
            }`}
            onClick={() => handleClick(testimonial)}
          />
        ))}
        <button className="rounded-full ml-3">
          <img src={testImg} alt="Play" className="w-14 h-14 flex justify-center items-center" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
