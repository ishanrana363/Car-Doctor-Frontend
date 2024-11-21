import React from 'react';
import { FaLock } from 'react-icons/fa'; // Importing a lock icon

const Product = () => {
    // Unique product data
    const products = [
        {
            title: 'Car Engine Plug',
            price: '$20.00',
            image: 'https://via.placeholder.com/100?text=Engine+Plug',
            rating: 5,
            locked: false,
        },
        {
            title: 'Car Air Filter',
            price: '$15.00',
            image: 'https://via.placeholder.com/100?text=Air+Filter',
            rating: 4,
            locked: true,
        },
        {
            title: 'Cools LED Light',
            price: '$25.00',
            image: 'https://via.placeholder.com/100?text=LED+Light',
            rating: 5,
            locked: false,
        },
        {
            title: 'Steering Cover',
            price: '$10.00',
            image: 'https://via.placeholder.com/100?text=Steering+Cover',
            rating: 3,
            locked: true,
        },
        {
            title: 'Car Mats Set',
            price: '$30.00',
            image: 'https://via.placeholder.com/100?text=Car+Mats',
            rating: 5,
            locked: false,
        },
        {
            title: 'Seat Covers',
            price: '$40.00',
            image: 'https://via.placeholder.com/100?text=Seat+Covers',
            rating: 4,
            locked: true,
        },
        {
            title: 'Car Battery Charger',
            price: '$50.00',
            image: 'https://via.placeholder.com/100?text=Battery+Charger',
            rating: 5,
            locked: false,
        },
        {
            title: 'Dash Cam',
            price: '$60.00',
            image: 'https://via.placeholder.com/100?text=Dash+Cam',
            rating: 4,
            locked: false,
        },
        {
            title: 'Phone Mount',
            price: '$8.00',
            image: 'https://via.placeholder.com/100?text=Phone+Mount',
            rating: 3,
            locked: false,
        },
        {
            title: 'Car Vacuum Cleaner',
            price: '$35.00',
            image: 'https://via.placeholder.com/100?text=Vacuum+Cleaner',
            rating: 5,
            locked: true,
        },
    ];

    return (
        <div className='w-11/12 mx-auto mb-8'>
            <div>
                {/* Heading Section */}
                <div>
                    <p className='text-[#ff3811] font-bold text-center'>Popular Products</p>
                    <h1 className='md:text-[40px] lg:text-[45px] text-black font-bold text-center'>
                        Browse Our Products
                    </h1>
                    <div className='md:[13px] lg:text-[15px] text-[10px] md:w-[50%] text-justify md:text-center mx-auto'>
                        <p>
                            The majority have suffered alteration in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                        </p>
                    </div>
                </div>
                {/* Product Grid */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-4 shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                {/* Product Image */}
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-32 object-contain mb-4"
                                    />
                                    {product.locked && (
                                        <div className="absolute top-2 right-2 text-center bg-gray-800 text-white text-xs rounded-full p-1">
                                            <FaLock />
                                        </div>
                                    )}
                                </div>
                                {/* Product Details */}
                                <h3 className="text-lg text-center font-semibold">{product.title}</h3>
                                <div className="flex items-center justify-center my-2">
                                    {Array.from({ length: product.rating }).map((_, i) => (
                                        <span key={i} className="text-yellow-500 text-sm  ">
                                            ⭐
                                        </span>
                                    ))}
                                </div>
                                <p className="text-red-500 text-lg font-bold text-center ">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" mt-4 mb-6  " >
                    <button className="p-2 block mx-auto border-2 border-[#FF3811] text-[#FF3811] " >More Service</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
