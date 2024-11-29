import React, { useState } from "react";
import useAxiosPublic from './../../hook/UseAxiosPublic';
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

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
        <div className="w-11/12 my-5 lg:my-10 mx-auto">
            <div className="">
                {/* Title Section */}
                <div className="text-center mb-6">
                    <h2 className="text-red-500 md:text-lg text-[13px] font-semibold md:mb-2">Service</h2>
                    <h1 className="md:text-4xl font-bold md:mb-4">Our Service Area</h1>
                    <p className="text-gray-600 text-justify md:text-[16px] text-[10px] md:text-center ">
                        The Majority Have Suffered Alteration In Some Form, By Injected
                        Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                    {services.slice(0, visibleServices).map((service, index) => (
                        <div
                            key={index}
                            className="border rounded-lg mb-4 p-4 shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow"
                        >
                            <Link to={`/service-details/${service?._id}`}>
                                <div className="md:h-52 my-auto " >
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="lg:w-full h-auto mx-auto lg:h-48 object-cover"
                                    />
                                </div>
                                <div className="md:p-4 p-2 ">
                                    <h3 className="md:text-xl text-[12px] font-semibold md:mb-2">{service.service_name}</h3>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-[#FF3811] md:text-xl text-[12px] font-semibold">
                                                Price: {service.service_price}b
                                            </p>
                                        </div>

                                        <div className="flex justify-end">
                                            <button className="text-red-500 md:text-xl text-[12px] font-semibold">→</button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[#FF3811] md:text-xl text-[12px] font-semibold">
                                            Service Type: {service.service_type}
                                        </p>
                                    </div>
                                </div>
                            </Link>
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
