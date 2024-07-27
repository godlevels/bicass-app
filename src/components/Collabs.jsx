import { collabsData } from "../constants";


const Collabs = () => {
    return (
        <div className="py-14 w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4">
            <h1 className="text-center text-[2.5rem] font-bold leading-[3rem] pb-10">More than 25,000 teams use Collabs</h1>
            <div className="flex-wrap flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
                {collabsData.map((client) => (
                    <div key={client.id} className="flex-1 sm:min-w-[192px] min-w-[120px] m-5">
                    <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Collabs
