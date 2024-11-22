import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useQuery } from "react-query";
import useAxiosPublic from "../../../hook/UseAxiosPublic";

const BannerList = () => {
    const axiosPublic = useAxiosPublic();
    const { data: bannerList = [] } = useQuery({
        queryKey: "bannerList",
        queryFn: async () => {
            let res = await axiosPublic.get("/banner");
            return res.data.data;
        },
    });

    return (
        <div className="p-6 flex justify-center items-center">
            <div className="w-full max-w-5xl">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="py-3 px-6 text-left">Image</th>
                            <th className="py-3 px-6 text-left">Heading</th>
                            <th className="py-3 px-6 text-left">Title</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Loop over bannerList to generate table rows */}
                        {bannerList.map((item, i) => {
                            return (
                                <tr key={i} className="border-2 border-b-teal-400">
                                    {/* Image */}
                                    <td className="py-3 px-6">
                                        <img
                                            src={item.image} // Replace with dynamic image URL
                                            alt="Sample"
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </td>

                                    {/* Heading */}
                                    <td className="py-3 px-6">{item.heading}</td>

                                    {/* Title */}
                                    <td className="py-3 px-6">{item.title}</td>

                                    {/* Actions */}
                                    <td className="py-3 px-6 text-center flex justify-center items-center space-x-4 mt-3">
                                        {/* Edit Button with Tooltip */}
                                        <div className="relative group">
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md flex items-center">
                                                <FaEdit />
                                            </button>
                                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-sm px-2 py-1 rounded">
                                                Edit
                                            </span>
                                        </div>

                                        {/* Delete Button with Tooltip */}
                                        <div className="relative group">
                                            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-md flex items-center">
                                                <FaTrash />
                                            </button>
                                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-sm px-2 py-1 rounded">
                                                Delete
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BannerList;
