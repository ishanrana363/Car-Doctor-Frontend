import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useQuery } from "react-query";
import useAxiosPublic from "../../../hook/UseAxiosPublic";
import { deleteAlert } from "../../../helper/deleteAlert";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TeamMemberList = () => {
    const axiosPublic = useAxiosPublic();

    // Fetching product data with React Query
    const { data: teamList = [], refetch, isLoading } = useQuery({
        queryKey: "teamList",
        queryFn: async () => {
            let res = await axiosPublic.get("/team");
            return res.data.data;
        },
    });

    const handleDelete = async (id) => {
        const resp = await deleteAlert(); // Show confirmation alert

        if (resp.isConfirmed) {
            try {
                // Delete team member by ID
                let res = await axiosPublic.delete(`/team/${id}`);
                if (res) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Product has been deleted.",
                        icon: "success"
                    });
                }
                refetch(); // Refetch data after deletion
            } catch (error) {
                console.log(error);
            }
        }
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">Loading...</div>
            </div>
        );
    }

    return (
        <div className="p-6 flex justify-center text-black items-center">
            <Helmet>
                <title>Dashboard | Team Member List</title>
            </Helmet>
            <div className="w-full max-w-5xl">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="py-3 px-6 text-left">Image</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Role</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Loop through teamList and render table rows */}
                        {teamList.map((item) => (
                            <tr key={item._id} className="border-b border-teal-400">
                                {/*  Image */}
                                <td className="py-3 px-6">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                </td>
                                {/*  Name */}
                                <td className="py-3 px-6">{item.name}</td>
                                {/*  role */}
                                <td className="py-3 px-6">{item.role}</td>                               
                                {/* Actions */}
                                <td className="py-3 mt-4 px-6 text-center flex justify-center items-center space-x-4">
                                    {/* Edit Button with Tooltip */}
                                    <div className="relative group">
                                        <Link to={`/dashboard/team-member-update/${item._id}`}>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md flex items-center">
                                                <FaEdit />
                                            </button>
                                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-sm px-2 py-1 rounded">
                                                Edit
                                            </span>
                                        </Link>
                                    </div>

                                    {/* Delete Button with Tooltip */}
                                    <div className="relative group">
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-md flex items-center"
                                        >
                                            <FaTrash />
                                        </button>
                                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-sm px-2 py-1 rounded">
                                            Delete
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeamMemberList;
