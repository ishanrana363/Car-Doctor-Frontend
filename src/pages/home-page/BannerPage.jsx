import  { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from 'react-query'
import useAxiosPublic from "../../hook/UseAxiosPublic";

const BannerPage = () => {
    const axiosPublic = useAxiosPublic()
    

    const {data : carouselItems = []} = useQuery({
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
    }, [currentIndex]); // Dependency on currentIndex ensures that it updates correctly

    return (
        <div className="relative bg-gray-900 text-white h-screen">
            {/* Carousel Item */}
            <div
                className="relative w-full h-full flex items-center justify-center bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${carouselItems[currentIndex]?.image})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center p-8 max-w-xl">
                    <h1 className="text-4xl font-bold mb-4">
                        {carouselItems[currentIndex]?.heading}
                    </h1>
                    <p className="text-gray-300 mb-6">
                        {carouselItems[currentIndex]?.title}
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
