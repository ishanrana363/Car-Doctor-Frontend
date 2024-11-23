import { createBrowserRouter } from "react-router-dom";
import Layout from './../layout/Layout';
import HomePage from "../pages/home-page/HomePage";
import AdminLayout from "../admin-layout/AdminLayout";
import BannerUpload from "../pages/adimn/banner-related-page/BannerUpload";
import BannerList from "../pages/adimn/banner-related-page/BannerList";
import BannerUpdate from "../pages/adimn/banner-related-page/BannerUpdate";
import CreateProduct from "../pages/adimn/product-page/CreateProduct";
import AllProduct from "../pages/adimn/product-page/AllProduct";
import ProductUpdate from "../pages/adimn/product-page/ProductUpdate";
import CreateTeam from './../pages/adimn/team-related-page/CreateTeam';
import TeamMemberList from "../pages/adimn/team-related-page/TeamMemberList";
import TeamMemberUpdate from "../pages/adimn/team-related-page/TeamMemberUpdate";
import CreateReview from "../pages/adimn/review-related-page/CreateReview";
import AllReview from "../pages/adimn/review-related-page/AllReview";

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
            },
            {
                path : "all-banner",
                element : <BannerList></BannerList>
            },
            {
                path : "banner-update/:id",
                element : <BannerUpdate></BannerUpdate>
            },
            {
                path : "product-upload",
                element : <CreateProduct></CreateProduct>
            },
            {
                path : "all-products",
                element : <AllProduct></AllProduct>
            },
            {
                path : "product-update/:id",
                element : <ProductUpdate></ProductUpdate>
            },
            {
                path : "team-upload",
                element : <CreateTeam></CreateTeam>
            },
            {
                path : "all-member",
                element : <TeamMemberList></TeamMemberList>
            },
            {
                path :"team-member-update/:id",
                element : <TeamMemberUpdate></TeamMemberUpdate>
            },
            {
                path : "review-upload",
                element : <CreateReview></CreateReview>
            },
            {
                path :"all-review",
                element : <AllReview></AllReview>
            }
        ]
    }
]);