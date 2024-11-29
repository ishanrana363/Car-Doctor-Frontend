import React from 'react';
import { useQuery } from 'react-query';
import useAxiosPublic from '../../hook/UseAxiosPublic';
import { useParams } from 'react-router-dom';
const ServiceDetailsList = () => {
const axiosPublic = useAxiosPublic();
const {id} = useParams()

    const { data: singleServiceDetails = [], isLoading } = useQuery({
        queryKey: "singleServiceDetails",
        queryFn: async () => {
            let res = await axiosPublic.get(`/service-by-id/${id}`);
            return res.data.data;
        },
    });
    console.log(singleServiceDetails);
    return (
        <div className="container mx-auto p-6">
            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Left Section */}
                <div className="md:col-span-3">
                    {/* Image Section */}
                    <img
                        src="https://via.placeholder.com/800x400"
                        alt="Car Engine Service"
                        className="rounded-lg w-full"
                    />

                    {/* Heading and Description */}
                    <h2 className="text-3xl font-bold mt-6">
                        Unique Car Engine Service
                    </h2>
                    <p className="mt-4 text-gray-600">
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration. A professional car mechanic
                        with modern tools and years of experience provides the best car
                        services in your area.
                    </p>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {[
                            "Instant Car Services",
                            "24/7 Quality Service",
                            "Easy Customer Service",
                            "Quality Cost Service",
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                            >
                                <h3 className="text-xl font-semibold">{service}</h3>
                                <p className="text-gray-600 mt-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Steps to Process */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-bold mb-4">3 Simple Steps to Process</h3>
                        <p className="text-gray-600 mb-6">
                            Follow these simple steps to get the best car repair services.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {["STEP ONE", "STEP TWO", "STEP THREE"].map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-white border rounded-lg p-6 text-center hover:shadow-xl transition"
                                >
                                    <div className="text-3xl font-bold text-red-500">0{index + 1}</div>
                                    <h4 className="font-semibold mt-4">{step}</h4>
                                    <p className="text-gray-600 mt-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar Section */}
                <div className="space-y-6">
                    {/* Services List */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {[
                                "Full Car Repair",
                                "Engine Repair",
                                "Automatic Services",
                                "Engine Oil Change",
                                "Battery Change",
                            ].map((service, index) => (
                                <li key={index} className="text-gray-700 hover:text-red-500 cursor-pointer">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download Section */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Download</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-700 hover:text-red-500 cursor-pointer">📄 Brochure</li>
                            <li className="text-gray-700 hover:text-red-500 cursor-pointer">📑 Company Details</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-red-500 text-white rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold mb-4">Car Doctor</h3>
                        <p className="mb-4">Need Help? We Are Here To Help You</p>
                        <button className="bg-white text-red-500 px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition">
                            Get A Quote
                        </button>
                    </div>

                    {/* Price Section */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold mb-4">Price: $250.00</h3>
                        <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsList;
