import React, { useState } from 'react';
import { uploadImg } from './../../../upload-img/UploadImg';
import { Helmet } from 'react-helmet-async';
import { createAlert } from '../../../helper/createAlert';
import useAxiosPublic from './../../../hook/UseAxiosPublic';
import Swal from 'sweetalert2';

const CreateProduct = () => {
    const [loader, setLoader] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const axiosPublic = useAxiosPublic();

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
            const uploadedImageUrl = await uploadImg(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const img = e.target.img.files[0];
        const name = e.target.name.value;
        const rating = e.target.rating.value;
        const price = e.target.price.value;

        let imgUrl = "";

        if (!img?.name) {
            imgUrl = "";
        }

        imgUrl = await uploadImg(img);

        const payload = {
            img: imgUrl,
            name: name,
            rating: rating,
            price: price
        };

        const resp = await createAlert();

        if (resp.isConfirmed) {
            try {
                setLoader(true); // Start loader
                let res = await axiosPublic.post(`/product`, payload);
                setLoader(false); // Stop loader
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your product has been saved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    e.target.reset();
                    setImageUrl(null);
                    return;
                }
            } catch (error) {
                console.error(error);
                setLoader(false); // Stop loader on error
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Dashboard | Product Upload</title>
            </Helmet>
            <div className="flex justify-center items-center border-2 border-blue-600 ">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-lg p-6 w-full "
                >
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                        Upload Product
                    </h2>

                    {/* Image Upload */}
                    <div className="mb-4 w-1/2 ">
                        <label
                            htmlFor="img"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="img"
                            name="img"
                            onChange={handleImageUpload}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {imageUrl && (
                            <div className="mb-4">
                                <span className="text-gray-700">Selected Image:</span>
                                <img
                                    src={imageUrl}
                                    alt="Uploaded"
                                    className="mt-2 w-16 h-auto rounded-md border"
                                />
                            </div>
                        )}
                    </div>

                    <div className='flex items-center justify-between gap-8   ' >
                        {/* name */}
                        <div className="mb-4 w-full ">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter product name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* rating */}
                        <div className="mb-4 w-full ">
                            <label
                                htmlFor="rating"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Product rating
                            </label>
                            <input
                                type="text"
                                id="rating"
                                name="rating"
                                placeholder="Enter product rating"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* price */}
                    <div className="mb-4 w-1/2 ">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Product price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            placeholder="Enter product price"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loader} // Disable button during loading
                        className={` font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-black 
                            ${loader ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-tr from-sky-500 via-cyan-400 via-teal-300 to-green-500"}`}
                    >
                        {loader ? (
                            <div className="flex justify-center items-center">
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                                    ></path>
                                </svg>
                                Processing...
                            </div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateProduct;
