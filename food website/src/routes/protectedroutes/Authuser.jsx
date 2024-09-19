// AuthUser.jsx
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthUser = () => {
  const { isUserExist } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Use useEffect to handle side-effect navigation
  useEffect(() => {
    if (!isUserExist) {
      navigate('/login'); // Navigate after component renders
    }
  }, [isUserExist, navigate]);
  console.log(isUserExist)

  // Render the outlet only if user exists
  return isUserExist ? <Outlet /> : null;
};

export default AuthUser;
