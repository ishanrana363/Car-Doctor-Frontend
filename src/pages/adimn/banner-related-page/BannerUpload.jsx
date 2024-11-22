import React, { useState } from 'react';

const BannerUpload = () => {
    

    return (
        <div className="flex justify-center items-center ">
            <form
                onSubmit={"handleSubmit"}
                className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Create Entry
                </h2>

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
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {/* {formData.image && (
                        <p className="mt-2 text-sm text-green-600">
                            {formData.image.name} selected.
                        </p>
                    )} */}
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
                        placeholder="Enter heading"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
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
                        placeholder="Enter title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default BannerUpload;
