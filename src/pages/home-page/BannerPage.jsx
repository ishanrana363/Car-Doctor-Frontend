import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const BannerPage = () => {
    const carouselItems = [
        {
            id: 1,
            title: "Affordable Price For Car Servicing",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form.",
            img: "https://res.cloudinary.com/dj2edy2rg/image/upload/v1732089648/ndfbqnojvyltuifhrw19.jpg",
        },
        {
            id: 2,
            title: "Expert Mechanics for Your Service",
            description:
                "Our mechanics are certified and experienced in all types of vehicles and models.",
            img: "https://res.cloudinary.com/dj2edy2rg/image/upload/v1732029430/uz2bmnb2ebsoq8etgk0k.webp",
        },
        {
            id: 3,
            title: "High-Quality Tools and Equipment",
            description:
                "We use only the best tools and equipment to ensure quality service for your car.",
            img: "https://res.cloudinary.com/dj2edy2rg/image/upload/v1732089648/ndfbqnojvyltuifhrw19.jpg",
        },
        {
            id: 4,
            title: "Reliable and Trustworthy Service",
            description:
                "Your car is in safe hands. Trust us for reliable and honest servicing.",
            img: "https://res.cloudinary.com/dj2edy2rg/image/upload/v1732029430/uz2bmnb2ebsoq8etgk0k.webp",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    // Automatically change slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // 5000 ms = 5 seconds

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [currentIndex]); // Dependency on currentIndex ensures that it updates correctly

    return (
        <div className="relative bg-gray-900 text-white h-screen">
            {/* Carousel Item */}
            <div
                className="relative w-full h-full flex items-center justify-center bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${carouselItems[currentIndex].img})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center p-8 max-w-xl">
                    <h1 className="text-4xl font-bold mb-4">
                        {carouselItems[currentIndex].title}
                    </h1>
                    <p className="text-gray-300 mb-6">
                        {carouselItems[currentIndex].description}
                    </p>
                    <div className="flex space-x-4 justify-center">
                        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                            Discover More
                        </button>
                        <button className="bg-transparent border border-white py-2 px-4 rounded hover:bg-gray-800">
                            Latest Project
                        </button>
                    </div>
                </div>
            </div>

            {/* Left Arrow */}
            <button
                className="absolute bottom-0 right-20 hover:bg-[#ff3811] transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full "
                onClick={handlePrev}
            >
                <FaArrowLeftLong size={20} />
            </button>

            {/* Right Arrow */}
            <button
                className="absolute bottom-0 right-4 hover:bg-[#ff3811] transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full "
                onClick={handleNext}
            >
                <FaArrowRightLong size={20} />
            </button>
        </div>
    );
};

export default BannerPage;
