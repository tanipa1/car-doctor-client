import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center w-1/2 mx-auto">
                <h3 className='text-xl text-[#FF3811] font-bold'>Service</h3>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p className="pt-5 text-sm text-gray-500">The majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-10">
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
            <div className="flex justify-center mb-10">
                <button className="btn btn-outline nav-btn">More Services</button>
            </div>
        </div>
    );
};

export default Services;