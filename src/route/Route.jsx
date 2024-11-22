import { createBrowserRouter } from "react-router-dom";
import Layout from './../layout/Layout';
import HomePage from "../pages/home-page/HomePage";
import AdminLayout from "../admin-layout/AdminLayout";
import BannerUpload from "../pages/adimn/banner-related-page/BannerUpload";

export const router = createBrowserRouter([
    {
        path : "/",
        
        element : <Layout></Layout>,
        children : [
            {
                path : "/",
                element : <HomePage></HomePage>
            }
        ]
    },
    {
        path : "/dashboard",
        element : <AdminLayout></AdminLayout>,
        children : [
            {
                path : "banner-upload",
                element : <BannerUpload></BannerUpload>
            }
        ]
    }
]);