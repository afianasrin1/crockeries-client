import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blogs";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import AllReports from "../Pages/Dashboard/AllReports/AllReports";
import ManageBuyers from "../Pages/Dashboard/ManageBuyers/ManageBuyers";
import ManageSellers from "../Pages/Dashboard/ManageSellers/ManageSellers";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MyAllProducts from "../Pages/Dashboard/MyAllProducts/MyAllProducts";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import ReportedProducts from "../Pages/Dashboard/ReportedProducts/ReportedProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Crockeries from "../Pages/Crockeries/Crockeries";
import SingleFurniture from "../Pages/Crockeries/SingleCrockeries";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/Login/SignIn/SignIn";
import SignUp from "../Pages/Login/SignUp/Signup";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRouter from "./PrivateRouter";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/crockeries/:id",
        element: <Crockeries />,
        loader: async ({ params }) =>
          fetch(
            `${process.env.REACT_APP_ApiUrl}categoriesProducts/${params.id}`
          ),
      },
      {
        path: "/singleFurniture/:id",
        element: <SingleFurniture />,
        loader: async ({ params }) =>
          fetch(`${process.env.REACT_APP_ApiUrl}crockeries/${params.id}`),
      },
      { path: "/blog", element: <Blog /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signIn", element: <SignIn /> },
    ],
  },
  {
    path: `/dashboard/`,
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard/myOrders",
        element: (
          <BuyerRoute>
            <MyOrders />{" "}
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/manageSellers",
        element: (
          <AdminRoute>
            <ManageSellers />{" "}
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageBuyers",
        element: (
          <AdminRoute>
            <ManageBuyers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allProducts",
        element: (
          <AdminRoute>
            <AllProducts />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allReports",
        element: (
          <AdminRoute>
            <AllReports />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedProducts",
        element: (
          <SellerRoute>
            <ReportedProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myAllProducts",
        element: (
          <SellerRoute>
            <MyAllProducts />{" "}
          </SellerRoute>
        ),
      },
    ],
  },
]);
export default router;
