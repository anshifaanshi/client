import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet,useLocation } from 'react-router-dom';
import {UserHeader} from "../components/user/UserHeader"
import { useDispatch,useSelector } from 'react-redux';
import { clearUser,saveUser } from '../redux/features/userslice';
import { axiosinstance } from '../config/axiosinstance';
function Adminlayout() {
  const {isAdminExist}=useSelector((state)=>state.user);
  const dispatch=useDispatch();
  const location=useLocation();
  const checkAdmin=async()=>{
    try{
      const response=await axiosinstance({
        method:"GET",
        url:"/user/checkadmin"
      })
      dispatch(saveUser())
      console.log(response)
    }catch(error){
      dispatch(clearUser());
      console.log(error)
    }
  }


useEffect(()=>{
  
})




  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Adminlayout;
