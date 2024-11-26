import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from 'react-query';
import useAxiosPublic from "../../hook/UseAxiosPublic";

const BannerPage = () => {
    const axiosPublic = useAxiosPublic();

    // Fetch carousel items from the API
    const { data: carouselItems = [], isLoading, isError } = useQuery({
        queryKey: 'carouselItems',
        queryFn: async () => {
            let res = await axiosPublic.get(`/banner`);
            return res.data.data;
        },
    });

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
    }, [currentIndex]);

    // Handle loading or error states
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading carousel items.</div>;
    }

    return (
        <div className="relative border-2  w-full border-red-700  text-white md:h-screen">
            {/* Carousel Item */}
            {carouselItems.length > 0 && (
                <div
                    className="relative w-full py-8 md:py-0  h-full flex items-center justify-center bg-cover bg-center transition-all duration-500"
                    style={{ backgroundImage: `url(${carouselItems[currentIndex]?.image})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 text-center md:p-8 p-2 max-w-xl">
                        <h1 className="md:text-4xl text-[15px]  font-bold md:mb-4">
                            {carouselItems[currentIndex]?.heading}
                        </h1>
                        <p className="text-gray-300  md:text-[16px] text-[10px] md:mb-6">
                            {carouselItems[currentIndex]?.title}
                        </p>
                        <div className="flex space-x-2 mt-2 justify-center">
                            <button className="bg-red-500 text-xs md:text-base text-white py-1 px-3 rounded hover:bg-red-600">
                                Discover More
                            </button>
                            <button className="bg-transparent border border-white text-xs md:text-base py-1 px-3 rounded hover:bg-gray-800">
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Left Arrow */}
            <button
                className="absolute   md:bottom-0 md:right-36  right-24 hover:bg-[#ff3811] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={handlePrev}
                disabled={isLoading || carouselItems.length === 0}
            >
                <FaArrowLeftLong className="md:text-[20px] text-[15px]" />
            </button>

            {/* Right Arrow */}
            <button
                className="absolute md:bottom-0 right-4 md:right-20 hover:bg-[#ff3811] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={handleNext}
                disabled={isLoading || carouselItems.length === 0}
            >
                <FaArrowRightLong className="md:text-[20px] text-[15px]" />
            </button>
        </div>
    );
};

export default BannerPage;
