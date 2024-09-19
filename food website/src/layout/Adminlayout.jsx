import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosinstance } from "../config/axiosinstance";
import AdminHeader  from "../components/admin/AdminHeader";
import AdminFooter  from "../components/admin/AdminFooter";



export const Adminlayout = () => {
    const { isMentorExist } = useSelector((state) => state.mentor);
    const dispatch = useDispatch();
    const location = useLocation();

    const checkMentor = async () => {
        try {
            const response = await axiosinstance({
                method: "GET",
                url: "/mentor/check-mentor",
            });
            dispatch(saveMentor());
            console.log(response);
        } catch (error) {
            dispatch(clearMentor());
            console.log(error);
        }
    };

    useEffect(() => {
        checkMentor();
    }, [location.pathname]);

    return (
        <div>
            <AdminHeader />
            <div className="min-h-96 flex h-full">
                {isMentorExist && <SideBar />}
                <Outlet />
            </div>
            {/* <Footer /> */}
            <AdminFooter />
        </div>
    );
};