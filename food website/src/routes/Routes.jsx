import Aboutus from '../pages/Aboutus';
import { createBrowserRouter } from 'react-router-dom';
import Rootlayout from '../layout/Rootlayout';
import Home from '../pages/Home';
import { LoginPage } from '../pages/Login';
import Signup from '../pages/Signup';
import { Hotel } from '../pages/Hotels';
import Hoteldetails from '../pages/Hoteldetails';
import Fooditems from '../pages/Fooditems';
import AdminLogin from '../pages/admin/AdminLogin';
import Authuser from '../routes/protectedroutes/Authuser';
import Profile from '../pages/user/Profile';
import { CartPage } from '../pages/user/Cartpage';
import { ProfilePage } from '../pages/Userprofile';
import { Adminlayout } from '../layout/Adminlayout';
import AdminProfile from '../pages/admin/AdminProfile';
import { UserLayout } from '../layout/Userlayout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <Aboutus />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "hotel/hotels",
        element: <Hotel />,
      },
      {
        path: "hotel/hotelprofile/:id",
        element: <Hoteldetails />,
      },
      {
        path: "fooditems/allfood",
        element: <Fooditems />,
      },
      {
        path: "Cart/getcart",
        element: <CartPage />,
      },
     
  ,
  {
    path: "user",
    element: <Authuser />, // Protect user routes
    children: [
      {
        path: "profile",
        element: <profilePage />, // Display the user's profile
      },
    ],
  }
      
    ],
  },
  {
    path: "admin",
    element: <Adminlayout />,
    children: [
      {
        path: "login",
        element: <AdminLogin role="admin" />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
    ],
  },
]);
