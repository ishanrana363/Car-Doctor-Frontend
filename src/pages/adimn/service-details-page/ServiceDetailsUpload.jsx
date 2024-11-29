import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { uploadImg } from '../../../upload-img/UploadImg';
import useAxiosPublic from './../../../hook/UseAxiosPublic';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { uploadVideo } from './../../../upload-video/UploadVideo';

const ServiceDetailsUpload = () => {
    const [images, setImages] = useState("");
    const [imagesUrl, setImagesUrl] = useState("");
    const [heading, setHeading] = useState('');
    const [serviceList, setServiceList] = useState([{ service_name: '', service_des: "" }]);
    const [des, setDes] = useState("");
    const [headingTwo, setHeadingTwo] = useState("");
    const [step, setStap] = useState([{ step_name: '', step_des: "" }]);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const { data: singleService = {}, isLoading, isError, refetch } = useQuery({
        queryKey: 'singleService',
        queryFn: async () => {
            let res = await axiosPublic.get(`/service/${id}`);
            return res.data.data;
        },
    });

    const handleImageUploadTwo = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagesUrl(reader.result);
            reader.readAsDataURL(file);

            const uploadedImageUrl = await uploadImg(file);
            setImagesUrl(uploadedImageUrl);
        }
    };

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
        // SERVICE 
        const img1 = e.target.img1.files[0];
        const service_name = e.target.service_name.value;
        const service_price = e.target.service_price.value;
        const service_title = e.target.service_title.value;
        const service_type = e.target.service_type.value;
        const product_description = e.target.product_description.value;
        //SERVICE DETAILS
        const img2 = e.target.img2.files[0];
        const video = e.target.video.files[0];
        const step_heading_description = e.target.step_heading_description.value;
        setLoading(true);

        let imgUrl1 = "";
        if (img1) {
            imgUrl1 = await uploadImg(img1);
        }


        let imgUrl = "";
        if (img2) {
            imgUrl = await uploadImg(img2);
        }

        let videoUrl = "";

        if (!name?.video) {
            videoUrl = "";
        }
        videoUrl = await uploadVideo(video);

        const packageData = {
            img1 : imgUrl1 ,
            service_price,
            service_title,
            service_type,
            product_description,
            heading,
            serviceList,
            des,
            step,
            img2: imgUrl
            ,
            video: videoUrl,
            service_name,
            step_heading_description

        };

        console.log(packageData)

        axiosPublic.post('/service-details', packageData)
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
                setImages("");
                setHeading("");
                setServiceList([{ service_name: "", service_des: "" }]);
                setDes("");
                setStap([{ step_name: "", step_des: "" }]);
                setHeadingTwo("");
                e.target.reset(); // Reset file inputs
                refetch();
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

            <h2 className="text-2xl font-bold text-center mb-6">Add Service </h2>
            <form onSubmit={handleSubmit}>
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
                        name="img1"
                        onChange={handleImageUploadTwo}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {imagesUrl && (
                        <div className="mb-4">
                            <span className="text-gray-700">Selected Image:</span>
                            <img
                                src={imagesUrl}
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
                <h1 className='text-center font-bold text-3xl ' >Service Details</h1>
                {/* service details img */}
                <div className="p-2 w-full">
                    <div className="relative">
                        <label className="leading-7 text-sm text-gray-600 font-bold">Upload Service Details Image</label>
                        <input
                            type="file"
                            name="img2"
                            onChange={handleImageUpload}
                            className="file-input file-input-bordered file-input-md w-full"
                        />
                    </div>
                </div>
                {
                    images && (
                        <div className="mb-4">
                            <span className="text-gray-700">Selected Image:</span>
                            <img
                                src={images}
                                alt="uploaded-image"
                                className="w-48 h-48 rounded-lg object-cover"
                            />
                        </div>
                    )
                }
                {/* service descriptions */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Service Description</label>
                    <input
                        type="text"
                        value={des}
                        onChange={(e) => setDes(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                        placeholder="Enter address"
                        required
                    />
                </div>
                {/* service list */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-xl">Service List Content</label>
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

                {/* step heading */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Enter step heading </label>
                        <input
                            type="text"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter heading"
                            required
                        />
                    </div>

                </div>

                {/* step heading description */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Step  description </label>
                        <input
                            type="text"
                            name='step_heading_description'
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter step heading-description"
                            required
                        />
                    </div>
                </div>
                {/* step list */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-xl">Steps List </label>
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
                {/* video */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                    <div className="p-2 w-full">
                        <div className="relative">
                            <label className="leading-7 text-sm text-gray-600 font-bold">Upload Video</label>
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

export default ServiceDetailsUpload;
