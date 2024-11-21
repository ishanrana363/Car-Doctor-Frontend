import React from "react";
import { FaGoogle, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="w-11/12 mx-auto">
        <footer className="bg-black text-white py-10">
          <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center space-x-2">
                <span className="text-orange-500">🚗</span>
                <span>Car Doctor</span>
              </h2>
              <p className="text-gray-400">
                Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial.
              </p>
              <div className="flex space-x-4">
                <Link to="/" className="hover:text-orange-500">
                  <FaGoogle size={20} />
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  <FaTwitter size={20} />
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  <FaInstagram size={20} />
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  <FaDiscord size={20} />
                </Link>
              </div>
            </div>

            {/* About Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">Service</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/why-car-doctor" className="hover:underline">Why Car Doctor</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">About</Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/support-center" className="hover:underline">Support Center</Link>
                </li>
                <li>
                  <Link to="/feedback" className="hover:underline">Feedback</Link>
                </li>
                <li>
                  <Link to="/accessibility" className="hover:underline">Accessibility</Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
