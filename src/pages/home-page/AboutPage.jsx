import React from "react";

const AboutPage = () => {
    return (
        <div className="flex flex-wrap justify-between items-center px-8 py-16 bg-white">
            {/* Left Section (Images) */}
            <div className="flex flex-col space-y-4  w-full md:w-1/2">
                <div className="relative w-full " >
                    <img
                        src="https://via.placeholder.com/300x200" // Replace with the actual image URL
                        alt="Mechanic"
                        className="rounded-md"
                    />
                    <div className="" >
                        <img
                            src="https://via.placeholder.com/300x200" // Replace with the actual image URL
                            alt="Equipment"
                            className="rounded-md"
                        />
                    </div>
                </div>


            </div>

            {/* Right Section (Content) */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 text-center md:text-left">
                <h2 className="text-red-500 text-lg font-semibold mb-2">About Us</h2>
                <h1 className="text-3xl font-bold leading-snug mb-4">
                    We are qualified <br />
                    & of experience in this field
                </h1>
                <p className="text-gray-600 mb-4">
                    There Are Many Variations Of Passages Of Lorem Ipsum Available, But
                    The Majority Have Suffered Alteration In Some Form, By Injected
                    Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
                </p>
                <p className="text-gray-600 mb-6">
                    The Majority Have Suffered Alteration In Some Form, By Injected
                    Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
                </p>
                <button className="bg-red-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-red-600">
                    Get More Info
                </button>
            </div>
        </div>
    );
};

export default AboutPage;
