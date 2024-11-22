import React, { useState } from "react";
import {
    FaArrowLeft,
    FaArrowRight,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import useAxiosPublic from "../../hook/UseAxiosPublic";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Team = () => {
    // const teamMembers = [
    //     {
    //         name: "John Doe",
    //         title: "Car Engine Plug",
    //         role: "Engine Expert",
    //         image: "https://via.placeholder.com/150/0000FF/808080?Text=John+Doe",
    //     },
    //     {
    //         name: "Jane Smith",
    //         title: "Brake Specialist",
    //         role: "Brake Expert",
    //         image: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Jane+Smith",
    //     },
    //     {
    //         name: "Michael Johnson",
    //         title: "Tire Fitter",
    //         role: "Tire Expert",
    //         image: "https://via.placeholder.com/150/00FF00/000000?Text=Michael+Johnson",
    //     },
    //     {
    //         name: "Emily Davis",
    //         title: "Oil Specialist",
    //         role: "Oil Expert",
    //         image: "https://via.placeholder.com/150/FFFF00/000000?Text=Emily+Davis",
    //     },
    //     {
    //         name: "Chris Brown",
    //         title: "Battery Specialist",
    //         role: "Battery Expert",
    //         image: "https://via.placeholder.com/150/0000FF/FFFFFF?Text=Chris+Brown",
    //     },
    // ];

    const axiosPublic = useAxiosPublic()

    const { data: teamMembers = [],  isLoading } = useQuery({
        queryKey: "teamMembers",
        queryFn: async () => {
            let res = await axiosPublic.get("/team");
            return res.data.data;
        },
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleItems = window.innerWidth < 768 ? 1 : 3; // Show 1 item on small devices, 3 items on larger screens

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % teamMembers.length
        );
    };
    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center mb-8">
                <p className="text-[#ff3811] font-bold">Our Team</p>
                <h1 className="md:text-[40px] lg:text-[45px] text-black font-bold">
                    Meet Our Experts
                </h1>
                <p className="md:text-[13px] lg:text-[15px] text-[10px] md:w-[50%] mx-auto">
                    Highly skilled professionals with extensive experience in their
                    respective fields.
                </p>
            </div>
            <div className="flex items-center justify-between">
                {/* Left Arrow */}
                <button
                    className="text-2xl text-gray-600 hover:text-[#ff3811] transition"
                    onClick={handlePrev}
                >
                    <FaArrowLeft />
                </button>
                {/* Team Member Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 mb-8 gap-6">
                    {teamMembers
                        .slice(currentIndex, currentIndex + visibleItems)
                        .concat(
                            currentIndex + visibleItems > teamMembers.length
                                ? teamMembers.slice(
                                    0,
                                    currentIndex + visibleItems - teamMembers.length
                                )
                                : []
                        )
                        .map((member, index) => (
                            <div
                                key={index}
                                className="w-80 border rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
                            >
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-40 h-40 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-lg font-bold">{member.title}</h3>
                                <p className="text-gray-600">{member.role}</p>
                                <div className="flex justify-center gap-4 mt-4">
                                    <Link to={`${member?.facebook_link}`}><FaFacebook className="text-blue-600 hover:scale-125 transition cursor-pointer" /></Link>
                                    <Link to={`${member?.twitter_link}`}><FaTwitter className="text-blue-400 hover:scale-125 transition cursor-pointer" /></Link>
                                    <Link to={`${member?.linkedin_link}`}><FaLinkedin className="text-blue-500 hover:scale-125 transition cursor-pointer" /></Link>
                                    <Link to={`${member?.instagram_link}`}><FaInstagram className="text-blue-700 hover:scale-125 transition cursor-pointer" /></Link>
                                </div>
                            </div>
                        ))}
                </div>
                {/* Right Arrow */}
                <button
                    className="text-2xl text-gray-600 hover:text-[#ff3811] transition"
                    onClick={handleNext}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Team;
