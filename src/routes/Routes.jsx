import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import HomePage from "../pages/HomePage";
import PublicPage from "../pages/PublicPage";
import LoginPage from "../pages/LoginPage";
import ProductRoute from "./ProductRoute.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import BookDetails from "../pages/BookDetails.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
            path: "/public",
            element: <PublicPage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          ,
          {
            path: "/register",
            element: <RegisterPage />,
          },
          {
            path: "/product",
            element: 
              <ProductRoute >
                <ProductsPage/>
              </ProductRoute>
          },
          {
            path: '/bookdetails/:bookId',
            element: <BookDetails/>,
        },
          {
            path:  '/*',
            element: <ErrorPage/>,
        },
        {
          path:  '/dashboard',
          element: <DashboardLayout></DashboardLayout>,
          children:[
            // path: "",
            // element:  
          ],
      },
    

      ],
    },
  ]);


  export default router