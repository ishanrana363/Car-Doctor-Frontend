import React from "react";
import { FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
    const info = [
        {
            icon: <FaCalendarAlt className="text-red-500 text-2xl" />,
            title: "We are open monday-friday",
            detail: "7:00 am - 9:00 pm",
        },
        {
            icon: <FaPhoneAlt className="text-red-500 text-2xl" />,
            title: "Have a question?",
            detail: "+2546 251 2658",
        },
        {
            icon: <FaMapMarkerAlt className="text-red-500 text-2xl" />,
            title: "Need a repair? our address",
            detail: "Liza Street, New York",
        },
    ];

    return (
        <div className="w-11/12 mx-auto mb-7 " >
            <div className="bg-black text-white py-8 px-4">
                <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
                    {info.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 text-center md:text-left"
                        >
                            <div>{item.icon}</div>
                            <div>
                                <p className="text-sm">{item.title}</p>
                                <p className="text-lg font-semibold">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;