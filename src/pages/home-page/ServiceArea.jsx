import React, { useState } from "react";
import useAxiosPublic from './../../hook/UseAxiosPublic';
import { useQuery } from "react-query";

const ServiceArea = () => {
    const axiosPublic = useAxiosPublic();
    const [visibleServices, setVisibleServices] = useState(4); // State to control visible services

    const { data: services = [], isLoading } = useQuery({
        queryKey: "services",
        queryFn: async () => {
            let res = await axiosPublic.get(`/service`);
            return res.data.data;
        },
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const handleShowMore = () => {
        setVisibleServices(services.length); // Show all services
    };

    const handleShowLess = () => {
        setVisibleServices(4); // Show only the first 4 services
    };

    return (
        <div className="w-11/12 mx-auto">
            <div className="">
                {/* Title Section */}
                <div className="text-center mb-6">
                    <h2 className="text-red-500 text-lg font-semibold mb-2">Service</h2>
                    <h1 className="text-3xl font-bold mb-4">Our Service Area</h1>
                    <p className="text-gray-600">
                        The Majority Have Suffered Alteration In Some Form, By Injected
                        Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.slice(0, visibleServices).map((service, index) => (
                        <div
                            key={index}
                            className="border rounded-lg mb-4 p-4 shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{service.service_name}</h3>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[#FF3811] font-medium">
                                            Price: {service.service_price}
                                        </p>
                                    </div>

                                    <div className="flex justify-end">
                                        <button className="text-red-500 text-xl font-bold">→</button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[#FF3811] font-medium">
                                        Service Type: {service.service_type}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons for Show More and Show Less */}
                <div className="mt-4 mb-6 text-center">
                    {visibleServices < services.length ? (
                        <button
                            onClick={handleShowMore}
                            className="p-2 border-2 border-[#FF3811] text-[#FF3811]"
                        >
                            More Service
                        </button>
                    ) : (
                        <button
                            onClick={handleShowLess}
                            className="p-2 border-2 border-[#FF3811] text-[#FF3811]"
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;
