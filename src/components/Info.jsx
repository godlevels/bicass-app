import Form from "./Form";
import Testimonial from "./Testimonial";

const Info = () => {
    return (
        <div className="py-14 w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4 bg-[#161C28]">
            <div className="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-24 py-20 px-5">
                <Testimonial />
                <Form />
            </div> 
        </div>
    );
}

export default Info;
