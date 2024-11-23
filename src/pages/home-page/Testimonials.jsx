import React, { useState } from "react";

const testimonials = [
    {
        name: "Awlad Hossain",
        role: "Businessman",
        feedback:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        image: "https://via.placeholder.com/50",
        rating: 5,
    },
    {
        name: "John Doe",
        role: "Entrepreneur",
        feedback:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "https://via.placeholder.com/50",
        rating: 4,
    },
    {
        name: "Jane Smith",
        role: "Designer",
        feedback:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
        image: "https://via.placeholder.com/50",
        rating: 5,
    },
    {
        name: "Alice Brown",
        role: "Developer",
        feedback:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image: "https://via.placeholder.com/50",
        rating: 3,
    },
    {
        name: "Robert Johnson",
        role: "Engineer",
        feedback:
            "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        image: "https://via.placeholder.com/50",
        rating: 4,
    },
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    // Get the 3 items to display (wrap around using % operator)
    const visibleTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
    ];

    return (
        <div className="flex flex-col items-center justify-center  py-6">
            <div className="relative max-w-6xl w-full bg-white p-6 rounded-lg shadow-md">
                {/* Navigation Arrows */}
                <button
                    onClick={prevTestimonial}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1 hover:bg-[#FF3811] rounded-full  focus:outline-none"
                >
                    ←
                </button>
                <button
                    onClick={nextTestimonial}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1 rounded-full hover:bg-[#FF3811]  focus:outline-none"
                >
                    →
                </button>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                    {visibleTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center border rounded-lg p-4"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full border-2 border-gray-300"
                            />
                            <h3 className="mt-4 text-lg font-semibold">
                                {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                            <div className="my-auto h-40 text-justify " >
                            <p className="mt-4 text-gray-600">{testimonial.feedback}</p>
                            </div>
                            <div className="flex mt-4">
                                {[...Array(testimonial.rating)].map((_, idx) => (
                                    <span key={idx} className="text-yellow-500 text-lg">
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
