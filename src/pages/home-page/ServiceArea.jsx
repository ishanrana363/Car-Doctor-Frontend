import React from "react";

const services = [
    {
        title: "Electrical System",
        price: "$20.00",
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
        title: "Engine Diagnostics",
        price: "$20.00",
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
        title: "Auto Car Repair",
        price: "$20.00",
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    }, {
        title: "Electrical System",
        price: "$20.00",
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
        title: "Engine Diagnostics",
        price: "$20.00",
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
        title: "Auto Car Repair",
        price: "$20.00",
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
];

const ServiceArea = () => {
    return (
        <div className="w-11/12 mx-auto " >
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
                <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border rounded-lg mb-4 p-4 shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <div className="flex justify-between items-center " >
                                    <div>
                                        <p className="text-[#FF3811] font-medium ">Price: {service.price}</p>

                                    </div>
                                    <div className="flex justify-end">
                                        <button className="text-red-500 text-xl font-bold">
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=" mt-4 mb-6  " >
                    <button className="p-2 block mx-auto border-2 border-[#FF3811] " >More Service</button>
                </div>

            </div>
        </div>
    );
};

export default ServiceArea;
