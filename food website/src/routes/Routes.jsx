import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Rootlayout from "../layout/Rootlayout";
import Aboutus from "../pages/Aboutus";
import Login from "../pages/Login";
import { Hotel } from "../pages/Hotels";
import { UserLayout } from "../layout/Userlayout";
import Userprofile from "../pages/Userprofile";
import Authuser from "./protectedroutes/Authuser";
import Adminlayout from "../layout/Adminlayout";
import Authadmin from "./protectedroutes/Authadmin";
import AdminProfile from "../pages/admin/AdminProfile";
import Hoteldetails from "../pages/Hoteldetails";
import Cartpage from "../pages/user/Cartpage";
import Signup from "../pages/Signup";
import Fooditems from "../pages/Fooditems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <Aboutus />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: '/hotel/hotels',
        element: <Hotel />,
      },
      {
        path: '/hotel/hotelprofile/:id',
        element: <Hoteldetails />,
      },
      {
        path: '/fooditems',
        element: <Fooditems />,
      },
    ],
  },
  {
    path: '/user',
    element: <Authuser />, // Protect user routes
    children: [
      {
        path: 'profile',
        element: <Userprofile />, // Add your user profile page here
      },
      {
        path: 'cart',
        element: <Cartpage />, // Add cart page
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <UserLayout>
        <Adminlayout />
      </UserLayout>
    ),
    children: [
      {
        path: 'profile',
        element: <AdminProfile />, // Admin profile page
      },{
        path:"signup",
        element:
      }
      // Add other admin routes here if needed
    ],
  },
]);
