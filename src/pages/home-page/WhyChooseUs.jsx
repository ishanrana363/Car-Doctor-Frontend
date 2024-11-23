import React from "react";
import { useQuery } from "react-query";
import useAxiosPublic from "../../hook/UseAxiosPublic";

const WhyChooseUs = () => {
    // Initialize Axios instance
    const axiosPublic = useAxiosPublic();

    // Fetching features data using React Query
    const {
        data: features = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: "choose",
        queryFn: async () => {
            const response = await axiosPublic.get("/choose");
            return response.data.data;
        },
    });

    // Handle loading state
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // Handle error state (optional enhancement)
    if (isError) {
        return <p>Failed to load features. Please try again later.</p>;
    }

    return (
        <div className="w-11/12 mx-auto">
            {/* Header Section */}
            <div className="my-10">
                <p className="font-bold text-center text-[#ff3811] lg:text-[20px] md:text-[17px] text-[11px]">
                    Core Features
                </p>
                <h1 className="font-bold text-center lg:text-[45px] md:text-[40px]">
                    Why Choose Us
                </h1>
                <div className="w-[50%] mx-auto">
                    <p className="text-center text-gray-800">
                        The majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly
                        believable.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="mx-auto my-8">
                <div className="flex flex-wrap  items-center justify-center gap-4">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md border ${feature.highlighted
                                    ? "bg-[#ff3811] text-white"
                                    : "bg-white text-black"
                                } hover:shadow-lg transition duration-300`}
                        >
                            <div className="h-28 my-auto " >
                                <img className="w-20 h-20" src={feature?.icon} alt={feature?.name || "Feature Icon"} />
                            </div>
                            <p className="font-semibold">{feature.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
