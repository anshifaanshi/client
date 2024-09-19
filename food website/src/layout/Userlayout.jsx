import React, { useEffect } from 'react';
import UserHeader from '../components/user/UserHeader';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { axiosinstance } from "../config/axiosinstance";
import { saveUser, clearUser } from '../redux/features/userSlice';
import Header from '../components/Header';

export const UserLayout = () => {
  const { isUserExist } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const checkUser = async () => {
    try {
      const response = await axiosinstance({
        method: "GET",
        url: "/user/checkuser",
      });
      console.log("full response:",response)
      // Assuming the user data is in response.data.user
      if (response?.data?.user) {
        dispatch(saveUser(response.data.user));
      }
      console.log("User data: ", response.data.user);
    } catch (error) {
      dispatch(clearUser());
      console.log("Error checking user: ", error);
    }
  };

  useEffect(() => {
    checkUser();
  }, [location.pathname]); // Optional: Remove this dependency if you want to check only once

  return (
    <div>
      {isUserExist ? <UserHeader /> : <Header />}
      <div className="min-h-96">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
