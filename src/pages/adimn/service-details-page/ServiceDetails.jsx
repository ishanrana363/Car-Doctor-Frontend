import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { uploadImg } from '../../../upload-img/UploadImg';
import useAxiosPublic from './../../../hook/UseAxiosPublic';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [images, setImages] = useState("");
    const [heading, setHeading] = useState('');
    const [serviceList, setServiceList] = useState([{ service_name: '', service_des: "" }]);
    const [des, setDes] = useState("");
    const [headingTwo, setHeadingTwo] = useState("");
    const [step, setStap] = useState([{ step_name: '', step_des: "" }]);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImages(reader.result);
            reader.readAsDataURL(file);

            const uploadedImageUrl = await uploadImg(file);
            setImages(uploadedImageUrl);
        }
    };

    const handleServiceChange = (index, field, value) => {
        const updatedContents = serviceList.map((service, i) =>
            i === index ? { ...service, [field]: value } : service
        );
        setServiceList(updatedContents);
    };

    const handleStepChange = (index, field, value) => {
        const stepUpdate = step.map((stepData, i) =>
            i === index ? { ...stepData, [field]: value } : stepData
        );
        setStap(stepUpdate);
    };

    const addServiceList = () => {
        setServiceList([...serviceList, { service_name: '', service_des: "" }]);
    };

    const addStep = () => {
        setStap([...step, { step_name: '', step_des: "" }]);
    };

    const removeService = (index) => {
        setServiceList(serviceList.filter((_, i) => i !== index));
    };

    const removeStep = (index) => {
        setStap(step.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const img = e.target.img.files[0];
        const video = e.target.video.files[0];
        setLoading(true);

        let imgUrl = "";
        if (img) {
            imgUrl = await uploadImg(img);
        }

        let videoUrl = "";

        if (!name?.video) {
            videoUrl = "";
        }
        videoUrl = await uploadImg(video);

        const packageData = {
            heading,
            serviceList,
            des,
            step,
            img: imgUrl,
            headingTwo,
            video: videoUrl,

        };

        axiosPublic.post('/feature', packageData)
            .then((res) => {
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your feature has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.error("Error submitting data:", error);
                Swal.fire({
                    icon: "error",
                    title: "Submission Failed",
                    text: "Please try again later.",
                });
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="mx-auto bg-white p-6 shadow-lg rounded-lg">
            <Helmet>
                <title>Dashboard | Add Feature</title>
            </Helmet>

            <h2 className="text-2xl font-bold text-center mb-6">Add Feature</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 w-1/2 ">
                    <label className="block text-gray-700 font-semibold mb-2">Service Name</label>
                    <input
                        type="text"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                        placeholder="Enter heading"
                        required
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Heading</label>
                        <input
                            type="text"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter heading"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Description</label>
                        <input
                            type="text"
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter address"
                            required
                        />
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label className="leading-7 text-sm text-gray-600 font-bold">Upload Image</label>
                        <input
                            type="file"
                            name="img"
                            onChange={handleImageUpload}
                            className="file-input file-input-bordered file-input-md w-full"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-xl">Service Content</label>
                    {serviceList.map((content, index) => (
                        <div key={index} className="flex gap-4 mb-2">
                            <input
                                type="text"
                                value={content.service_name}
                                onChange={(e) => handleServiceChange(index, 'service_name', e.target.value)}
                                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                placeholder="Service Name"
                                required
                            />
                            <input
                                type="text"
                                value={content.service_des}
                                onChange={(e) => handleServiceChange(index, 'service_des', e.target.value)}
                                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                placeholder="Service Description"
                                required
                            />
                            {serviceList.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeService(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addServiceList}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Add Service
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-xl">Steps</label>
                    {step.map((stepData, index) => (
                        <div key={index} className="flex gap-4 mb-2">
                            <input
                                type="text"
                                value={stepData.step_name}
                                onChange={(e) => handleStepChange(index, 'step_name', e.target.value)}
                                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                placeholder="Step Name"
                                required
                            />
                            <input
                                type="text"
                                value={stepData.step_des}
                                onChange={(e) => handleStepChange(index, 'step_des', e.target.value)}
                                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                placeholder="Step Description"
                                required
                            />
                            {step.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeStep(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addStep}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Add Step
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Heading Two</label>
                        <input
                            type="text"
                            value={headingTwo}
                            onChange={(e) => setHeadingTwo(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter heading two"
                            required
                        />
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label className="leading-7 text-sm text-gray-600 font-bold">Upload Image</label>
                            <input
                                type="file"
                                name="video"
                                className="file-input file-input-bordered file-input-md w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className={`mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Uploading...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ServiceDetails;
