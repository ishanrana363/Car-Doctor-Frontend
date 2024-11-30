import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useAxiosPublic from "../../hook/UseAxiosPublic";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Checkout = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  // Fetch all services
  const { data: allService = [], isLoading } = useQuery({
    queryKey: ["singleServiceDetails"],
    queryFn: async () => {
      let res = await axiosPublic.get(`/all-service`);
      return res.data.data;
    },
  });

  // State to hold the selected service details
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!isLoading && allService.length > 0) {
      // Filter to get the service details by ID
      const dataList = allService.find((service) => service._id === id);
      setData(dataList);
    }
  }, [id, allService, isLoading]); // Depend on `id`, `allService`, and `isLoading`

  if (isLoading) return <div>Loading...</div>;

  console.log(data)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="relative">
        <div
          className="h-60 bg-cover bg-center"
          style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}
        >
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <h1 className="text-4xl text-white font-bold">Check Out</h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="bg-red-500 text-white py-2 text-center">Home / Checkout</div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-md shadow-lg">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="service_name" className="block text-sm font-medium text-gray-700">
                Service Name
              </label>
              <input
                type="text"
                id="service_name"
                name="service_name"
                placeholder="Service Name"
                defaultValue={data?.service_name}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Service Price
              </label>
              <input
                type="text"
                id="price"
                placeholder="Service Price"
                name="service_price"
                defaultValue={data?.service_price}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="first_name"
                placeholder="First Name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="last_name"
                placeholder="Last Name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Your Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              name="message"
              rows="5"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white font-medium rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
