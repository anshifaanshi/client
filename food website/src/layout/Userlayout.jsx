import React from 'react'
import UserHeader from '../components/user/UserHeader'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { axiosinstance } from "../config/axiosinstance";


export const UserLayout = () => {
  const { isUserExist } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const checkUser = async () => {
      try {
          const response = await axiosinstance({
              method: "GET",
              url: "/user/check-user",
          });
          dispatch(saveUser());
          console.log(response);
      } catch (error) {
          dispatch(clearUser());
          console.log(error);
      }
  };


  useEffect(() => {
      checkUser();
  }, [location.pathname]);

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