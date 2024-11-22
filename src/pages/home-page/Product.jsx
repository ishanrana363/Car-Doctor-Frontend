import React, { useState } from "react";
import { useQuery } from "react-query";
import useAxiosPublic from "../../hook/UseAxiosPublic";

const Product = () => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [], isLoading } = useQuery({
        queryKey: "products",
        queryFn: async () => {
            let res = await axiosPublic.get(`/product`);
            return res.data.data;
        },
    });

    const [visibleCount, setVisibleCount] = useState(4); // State to control the number of visible products
    const [isShowingAll, setIsShowingAll] = useState(false); // Toggle between "show all" and "show less"

    const handleToggle = () => {
        if (isShowingAll) {
            setVisibleCount(4); // Reset to show the initial count
        } else {
            setVisibleCount(products.length); // Show all products
        }
        setIsShowingAll(!isShowingAll); // Toggle the button state
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="w-11/12 mx-auto mb-8">
            <div>
                {/* Heading Section */}
                <div>
                    <p className="text-[#ff3811] font-bold text-center">Popular Products</p>
                    <h1 className="md:text-[40px] lg:text-[45px] text-black font-bold text-center">
                        Browse Our Products
                    </h1>
                    <div className="md:[13px] lg:text-[15px] text-[10px] md:w-[50%] text-justify md:text-center mx-auto">
                        <p>
                            The majority have suffered alteration in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                        </p>
                    </div>
                </div>
                {/* Product Grid */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                        {products.slice(0, visibleCount).map((product, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-4 shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                {/* Product Image */}
                                <div className="relative">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-32 object-contain mb-4"
                                    />
                                </div>
                                {/* Product Details */}
                                <h3 className="text-lg text-center font-semibold">{product.title}</h3>
                                <div className="flex items-center justify-center my-2">
                                    {Array.from({ length: product.rating }).map((_, i) => (
                                        <span key={i} className="text-yellow-500 text-sm">⭐</span>
                                    ))}
                                </div>
                                <p className="text-red-500 text-lg font-bold text-center">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Toggle Products Button */}
                <div className="mt-4 mb-6">
                    <button
                        className="p-2 block mx-auto border-2 border-[#FF3811] text-[#FF3811]"
                        onClick={handleToggle}
                    >
                        {isShowingAll ? "Show Less" : "More Products"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
