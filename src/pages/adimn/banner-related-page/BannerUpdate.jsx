import React, { useState } from 'react';
import { uploadImg } from './../../../upload-img/UploadImg';
import { Helmet } from 'react-helmet-async';
import { createAlert } from '../../../helper/createAlert';
import useAxiosPublic from './../../../hook/UseAxiosPublic';
import Swal from 'sweetalert2';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { updateAlert } from '../../../helper/updateAlert';

const BannerUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const axiosPublic = useAxiosPublic();
    const { data: singleBanner = [], refetch, isLoading } = useQuery({
        queryKey: "singleBanner",
        queryFn: async () => {
            let res = await axiosPublic.get(`/banner/${id}`);
            return res.data.data;
        },
    });

    let { image: upcommingImg } = singleBanner;

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

    const updateBanner = async (e) => {
        e.preventDefault();

        const image = e.target.image.files[0];
        const heading = e.target.heading.value;
        const title = e.target.title.value;

        let updateImageUrl = upcommingImg;

        if (!image?.name) {
            updateImageUrl = upcommingImg;
        }

        updateImageUrl = await uploadImg(image);

        const payload = {
            image: updateImageUrl,
            heading: heading,
            title: title,
        };

        const resp = await updateAlert();

        if (resp.isConfirmed) {
            try {
                setLoader(true); // Start loader
                let res = await axiosPublic.put(`/banner/${id}`, payload);
                setLoader(false); // Stop loader
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been updated successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate("/dashboard/all-banner");
                    refetch();
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
                <title>Dashboard | Update Banner</title>
            </Helmet>
            <div className="flex justify-center items-center">
                <form
                    onSubmit={updateBanner}
                    className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                        Create Entry
                    </h2>

                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <img src={singleBanner?.image} />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
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

                    {/* Heading */}
                    <div className="mb-4">
                        <label
                            htmlFor="heading"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Heading
                        </label>
                        <input
                            type="text"
                            id="heading"
                            name="heading"
                            defaultValue={singleBanner?.heading}
                            placeholder="Enter heading"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"

                        />
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={singleBanner?.title}
                            placeholder="Enter title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loader} // Disable button during loading
                        className={`w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-black 
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

export default BannerUpdate;
