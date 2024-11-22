import { useState } from 'react';
import {
    IoCloseCircleOutline,
    IoRocketSharp,
    IoStatsChartSharp,
} from 'react-icons/io5';
import {
    MdAddCircleOutline,
    MdMenuOpen,
    MdExpandMore,
    MdExpandLess,
} from 'react-icons/md';
import { FaProjectDiagram, FaClipboardList } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state
    const [activeMenu, setActiveMenu] = useState(null); // Track which menu is open
    const { pathname } = useLocation(); // Track active route

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleMenuClick = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName); // Toggle active menu
    };

    return (
        <aside
            className={`h-screen bg-gradient-to-tr from-sky-500 via-cyan-400 via-teal-300 to-green-500 text-gray-950 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-14'
                }`}
        >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center p-3 gap-4">
                <div className={`text-lg font-bold ${!isSidebarOpen && 'hidden'}`}>
                    <NavLink to="/dashboard">
                        <p>Portfolio</p>
                    </NavLink>
                </div>
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    {isSidebarOpen ? (
                        <IoCloseCircleOutline className="text-3xl" />
                    ) : (
                        <MdMenuOpen className="text-2xl" />
                    )}
                </button>
            </div>

            {/* Sidebar Menu */}
            <nav className="mt-6 space-y-2">
                <ul>
                    {/* Project Section */}
                    <li>
                        <div
                            className="flex justify-between items-center cursor-pointer px-2 py-2  rounded-lg"
                            onClick={() => handleMenuClick('banner')}
                        >
                            <div className="flex items-center">
                                {/* <FaProjectDiagram className="text-base" /> */}
                                <span
                                    className={`${isSidebarOpen ? 'block' : 'hidden'
                                        } ml-2 text-sm font-medium`}
                                >
                                    Banner
                                </span>
                            </div>
                            {activeMenu === 'banner' ? <MdExpandLess /> : <MdExpandMore />}
                        </div>

                        {activeMenu === 'banner' && (
                            <ul className="mx-8 ">
                                <li>
                                    <NavLink
                                        to="/dashboard/banner-upload"
                                        className={`${pathname === '/dashboard/banner-upload'
                                            ? 'bg-[#55679C] text-white'
                                            : 'bg-white text-[#4040f6]'
                                            } px-2 py-1 flex items-center  rounded-lg text-sm   `}
                                    >
                                        <IoRocketSharp className="text-base" />
                                        <span
                                            className={`${isSidebarOpen ? 'ml-2' : 'hidden'}`}
                                        >
                                            Banner Upload
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="mt-1">
                                    <NavLink
                                        to="/dashboard/all-banner"
                                        className={`${pathname === '/dashboard/all-banner'
                                            ? 'bg-[#55679C] text-white'
                                            : 'bg-white text-[#4040f6]'
                                            } px-2 py-1 flex items-center  rounded-lg text-sm`}
                                    >
                                        <FaClipboardList className="text-base" />
                                        <span
                                            className={`${isSidebarOpen ? 'ml-2' : 'hidden'}`}
                                        >
                                            All Banner
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>


                    {/* Product Section */}
                    <li>
                        <div
                            className="flex justify-between items-center cursor-pointer px-2 py-2  rounded-lg"
                            onClick={() => handleMenuClick('product')}
                        >
                            <div className="flex items-center">
                                {/* <FaProjectDiagram className="text-base" /> */}
                                <span
                                    className={`${isSidebarOpen ? 'block' : 'hidden'
                                        } ml-2 text-sm font-medium`}
                                >
                                    Product
                                </span>
                            </div>
                            {activeMenu === 'product' ? <MdExpandLess /> : <MdExpandMore />}
                        </div>

                        {activeMenu === 'product' && (
                            <ul className="mx-8 ">
                                <li>
                                    <NavLink
                                        to="/dashboard/product-upload"
                                        className={`${pathname === '/dashboard/product-upload'
                                            ? 'bg-[#55679C] text-white'
                                            : 'bg-white text-[#4040f6]'
                                            } px-2 py-1 flex items-center  rounded-lg text-sm   `}
                                    >
                                        <IoRocketSharp className="text-base" />
                                        <span
                                            className={`${isSidebarOpen ? 'ml-2' : 'hidden'}`}
                                        >
                                            Product Upload
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="mt-1">
                                    <NavLink
                                        to="/dashboard/all-products"
                                        className={`${pathname === '/dashboard/all-products'
                                            ? 'bg-[#55679C] text-white'
                                            : 'bg-white text-[#4040f6]'
                                            } px-2 py-1 flex items-center  rounded-lg text-sm`}
                                    >
                                        <FaClipboardList className="text-base" />
                                        <span
                                            className={`${isSidebarOpen ? 'ml-2' : 'hidden'}`}
                                        >
                                            All Product
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* team Section */}
                    <li>
                        <div
                            className="flex justify-between items-center cursor-pointer px-2 py-2  rounded-lg"
                            onClick={() => handleMenuClick('team')}
                        >
                            <div className="flex items-center">
                                {/* <FaProjectDiagram className="text-base" /> */}
                                <span
                                    className={`${isSidebarOpen ? 'block' : 'hidden'
                                        } ml-2 text-sm font-medium`}
                                >
                                    Team
                                </span>
                            </div>
                            {activeMenu === 'team' ? <MdExpandLess /> : <MdExpandMore />}
                        </div>

                        {activeMenu === 'team' && (
                            <ul className="mx-8 ">
                                <li>
                                    <NavLink
                                        to="/dashboard/team-upload"
                                        className={`${pathname === '/dashboard/team-upload'
                                            ? 'bg-[#55679C] text-white'
                                            : 'bg-white text-[#4040f6]'
                                            } px-2 py-1 flex items-center  rounded-lg text-sm   `}
                                    >
                                        <IoRocketSharp className="text-base" />
                                        <span
                                            className={`${isSidebarOpen ? 'ml-2' : 'hidden'}`}
                                        >
                                            Team Member Upload
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="mt-1">
                                    <NavLink
                                        to="/dashboard/all-member"
                                        className={`${pathname === '/dashboard/all-member'
                                            ? 'bg-[#55679C] text-white'
                                            : 'bg-white text-[#4040f6]'
                                            } px-2 py-1 flex items-center  rounded-lg text-sm`}
                                    >
                                        <FaClipboardList className="text-base" />
                                        <span
                                            className={`${isSidebarOpen ? 'ml-2' : 'hidden'}`}
                                        >
                                            All Team Member
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
