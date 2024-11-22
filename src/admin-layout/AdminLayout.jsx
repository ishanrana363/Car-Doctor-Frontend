import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

const AdminLayout = () => {
    return (
        <div className="flex h-screen ">
            {/* Sidebar */}
            <Sidebar></Sidebar>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <AdminNavbar></AdminNavbar>

                {/* Main Dashboard Content */}
                <main className="flex-1 p-8 overflow-auto">
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    )
}

export default AdminLayout