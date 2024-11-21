import React from 'react'
import { FaUsers, FaClock, FaHeadset, FaTools, FaShieldAlt, FaTruck } from "react-icons/fa";


const WhyChooseUs = () => {
    const features = [
        { id: 1, icon: <FaUsers />, title: "Expert Team" },
        { id: 2, icon: <FaClock />, title: "Timely Delivery", highlighted: true },
        { id: 3, icon: <FaHeadset />, title: "24/7 Support" },
        { id: 4, icon: <FaTools />, title: "Best Equipment" },
        { id: 5, icon: <FaShieldAlt />, title: "100% Guarantee" },
        { id: 6, icon: <FaTruck />, title: "Timely Delivery" },
    ];

    return (
        <div className='w-11/12 mx-auto ' >
            <div>
                <div className='my-10' >
                    <p className='font-bold lg:text-[20px] md:text-[17px] text-[11px] text-center text-[#ff3811] ' >Core Features</p>
                    <h1 className='font-bold text-center lg:text-[45px] md:text-[40px]  ' >Why Choose Us</h1>
                    <div className='w-[50%] mx-auto ' >
                        <p className='text-center text-gray-800 ' >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                </div>
                <div className=" mx-auto my-8">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md border ${feature.highlighted ? "bg-[#ff3811] text-white" : "bg-white text-black"
                                    } hover:shadow-lg transition duration-300`}
                            >
                                <div className="text-3xl mb-2">{feature.icon}</div>
                                <p className="font-semibold">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs

