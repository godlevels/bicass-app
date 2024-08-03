import Form from "./Form"
import Testimonial from "./Testimonial"

const Info = () => {
    return (
        <div className="py-14 w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4">
            <div className="flex bg-[#161C28]">
                <Testimonial />
                <Form />
            </div> 
        </div>
    )
}

export default Info
