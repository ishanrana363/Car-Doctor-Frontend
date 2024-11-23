import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from "react-icons/md";  // Import both Menu and Close icons

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        {/* Navbar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <img className="lg:w-24 w-16"
                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732199952/Group_2_uu20u7.svg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Hamburger Menu for Small Devices */}
          <div className="lg:hidden">
            <button onClick={toggleDrawer}>
              {isDrawerOpen ? (
                <MdClose className="w-6 h-6 text-black" />  // Close icon when the drawer is open
              ) : (
                <MdMenu className="w-6 h-6 text-black" />  // Menu icon when the drawer is closed
              )}
            </button>
          </div>

          {/* Navigation Links for Large Devices */}
          <div className="hidden lg:block">
            <nav>
              <ul className="flex items-center gap-4">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={`/about`}>About</NavLink></li>
                <li><NavLink to={`/services`}>Services</NavLink></li>
                <li><NavLink to={`/blog`}>Blog</NavLink></li>
                <li><NavLink to={`/contact`}>Contact</NavLink></li>
              </ul>
            </nav>
          </div>

          {/* Search Icons and Appointment Button for Large Devices */}
          <div className="hidden lg:block">
            <nav>
              <ul className="flex items-center justify-center gap-5">
                <li>
                  <NavLink to={""}>
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732200190/Frame_gbqiwj.png" alt="Search" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={""}>
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732200190/Frame_1_e8gq3b.png" alt="Icon" />
                  </NavLink>
                </li>
                <li>
                  <NavLink className="border-2 py-2 px-2 border-[#FF3811] text-[#FF3811]" to={""}>
                    Appointment
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Drawer for Small Devices */}
        {isDrawerOpen && (
          <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50">
            <div className="p-4">
              {/* Close Button */}
              <button className="text-red-500 text-2xl mb-4" onClick={toggleDrawer}>
                ✕
              </button>

              {/* Navigation Links in Drawer */}
              <nav>
                <ul className="flex flex-col gap-4">
                  <li>
                    <NavLink to={"/"} onClick={toggleDrawer}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/about`} onClick={toggleDrawer}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/services`} onClick={toggleDrawer}>
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/blog`} onClick={toggleDrawer}>
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/contact`} onClick={toggleDrawer}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>

              {/* Search Icons and Appointment Button in Drawer */}
              <ul className="flex flex-col gap-4 mt-4">
                <li>
                  <NavLink to={""} onClick={toggleDrawer}>
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732200190/Frame_gbqiwj.png" alt="Search" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={""} onClick={toggleDrawer}>
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732200190/Frame_1_e8gq3b.png" alt="Icon" />
                  </NavLink>
                </li>
                <li>
                  <NavLink className="border-2 py-2 px-2 border-[#FF3811] text-[#FF3811]" to={""} onClick={toggleDrawer}>
                    Appointment
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
