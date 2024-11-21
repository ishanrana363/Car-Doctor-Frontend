import { createBrowserRouter } from "react-router-dom";
import Layout from './../layout/Layout';

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "home",
                element : <div>Home Page</div>
            }
        ]
    }
]);