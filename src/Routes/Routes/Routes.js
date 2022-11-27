import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import AboutUs from "../../Pages/Home/AboutUs/AboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      // { path: "/furnitures/:id", element: <Furnitures />, loader: async ({ params }) => fetch(`${process.env.REACT_APP_ApiUrl}categoriesProducts/${params.id}`) },

      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <DashboardLayout></DashboardLayout>
  //     </PrivateRoute>
  //   ),
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <MyAppointment></MyAppointment>,
  //     },
  //     {
  //       path: "/dashboard/allUsers",
  //       element: (
  //         <AdminRoute>
  //           <AllUsers></AllUsers>
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/addDoctor",
  //       element: (
  //         <AdminRoute>
  //           <AddDoctor />
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/allDoctors",
  //       element: (
  //         <AdminRoute>
  //           <AllDoctors />
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/payment/:id",
  //       element: (
  //         <AdminRoute>
  //           <Payment />
  //         </AdminRoute>
  //       ),

  //       loader: ({ params }) =>
  //         fetch(`http://localhost:5000/bookings/${params.id}`),
  //     },
  //   ],
  // },
]);

export default router;
