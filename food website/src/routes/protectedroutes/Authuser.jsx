// AuthUser.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthUser = () => {
    const { isUserExist } = useSelector((state) => state.user);
    const navigate = useNavigate();

    if (!isUserExist) navigate('/login');

    return isUserExist ? <Outlet /> : null;
};

export default AuthUser; // Ensure default export
