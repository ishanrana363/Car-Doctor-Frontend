import React, { useState } from 'react';
import { uploadImg } from './../../../upload-img/UploadImg';
import { Helmet } from 'react-helmet-async';
import { createAlert } from '../../../helper/createAlert';
import useAxiosPublic from './../../../hook/UseAxiosPublic';
import Swal from 'sweetalert2';

const CreateService = () => {
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
        const service_name = e.target.service_name.value;
        const service_price  = e.target.service_price.value;
        const service_title = e.target.service_title.value;
        const service_type = e.target.service_type.value;
        const product_description = e.target.product_description.value;

        let imgUrl = "";

        if (!img?.name) {
            imgUrl = "";
        }

        imgUrl = await uploadImg(img);

        const payload = {
            img: imgUrl,
            service_name,
            service_price,
            service_title,
            service_type,
            product_description,
        };

        const resp = await createAlert();

        if (resp.isConfirmed) {
            try {
                setLoader(true); // Start loader
                let res = await axiosPublic.post(`/service`, payload);
                setLoader(false); // Stop loader
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your service has been saved",
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
                <title>Dashboard | Service Upload</title>
            </Helmet>
            <div className="flex justify-center items-center border-2 border-blue-600 ">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-lg p-6 w-full "
                >
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                        Upload Service
                    </h2>

                    {/* Img Upload */}
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
                        {/* service  name */}
                        <div className="mb-4 w-full ">
                            <label
                                htmlFor="service_name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Service Name
                            </label>
                            <input
                                type="text"
                                id="service_name"
                                name="service_name"
                                placeholder="Enter service_name "
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Service price */}
                        <div className="mb-4 w-full ">
                            <label
                                htmlFor="service_price"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Service Price
                            </label>
                            <input
                                type="text"
                                id="service_price"
                                name="service_price"
                                placeholder="Enter service_price"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div className='flex gap-8' >
                        {/* service_title */}
                        <div className="mb-4 w-1/2 ">
                            <label
                                htmlFor="service_title"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Service Title
                            </label>
                            <input
                                type="text"
                                id="service_title"
                                name="service_title"
                                placeholder="Enter  service title"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        {/* service_type */}
                        <div className="mb-4 w-1/2 ">
                            <label
                                htmlFor="service_type"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Service Type
                            </label>
                            <input
                                type="text"
                                id="service_type"
                                name="service_type"
                                placeholder="Enter  service type"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 ">
                        <label
                            htmlFor="product_description"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Product Description
                        </label>
                        <textarea
                            id="product_description"
                            name="product_description"
                            placeholder="Enter product description "
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            rows="7"
                            required
                        ></textarea>
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

export default CreateService;
