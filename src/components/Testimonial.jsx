/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { testimonialData } from "../constants";

const Testimonial = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(testimonialData.testimonials[0]);
    return (
        <div>
            <div className="bg-gray-900 text-white p-8 rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{testimonialData.title}</h2>
      <p className="text-gray-400 mb-8">{testimonialData.description}</p>
      <blockquote className="italic text-lg mb-4">
        <p>"{selectedTestimonial.quote}"</p>
      </blockquote>
      <p className="text-right mb-8">_ {selectedTestimonial.author}</p>
      <div className="flex justify-center items-center space-x-4">
        {testimonialData.testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.avatar}
            alt={`Avatar ${index + 1}`}
            className={`w-12 h-12 rounded-full cursor-pointer ${selectedTestimonial === testimonial ? 'border-2 border-white' : ''}`}
            onClick={() => setSelectedTestimonial(testimonial)}
          />
        ))}
        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-900">
        </button>
      </div>
    </div>
        </div>
    )
}

export default Testimonial
