import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useAxiosPublic from "../../hook/UseAxiosPublic";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [loader, setLoader] = useState(false); // State to manage button loading state
  const { data: allService = [], isLoading } = useQuery({
    queryKey: ["singleServiceDetails"],
    queryFn: async () => {
      let res = await axiosPublic.get(`/all-service`);
      return res.data.data;
    },
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!isLoading && allService.length > 0) {
      const dataList = allService.find((service) => service._id === id);
      setData(dataList);
    }
  }, [id, allService, isLoading]);

  if (isLoading) return <div>Loading...</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true); // Start the loader
    const service_name = e.target.service_name.value;
    const service_price = e.target.service_price.value;
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const payload = {
      service_name,
      service_price,
      first_name,
      last_name,
      phone,
      email,
      message,
    };

    try {
      let resp = await axiosPublic.post(`/checkout`, payload);
      if (resp) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your order has been placed successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to place order",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(error);
    } finally {
      setLoader(false); // Stop the loader
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
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

      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-md shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
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
              disabled={loader} // Disable button while loading
              className={`w-full sm:w-auto px-6 py-3 ${loader ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
                } text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
            >
              {loader ? "Processing..." : "Order Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
