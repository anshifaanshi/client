import React, { useEffect, useState } from 'react';
import { axiosinstance } from '../../config/axiosinstance';
import { useNavigate } from 'react-router-dom';

function AdminProfile() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const fetchAdminProfile = async () => {
        try {
            const response = await axiosinstance({
                method: "GET",
                url: "/admin/profile"
            });
            setUser(response.data.data); // Assuming the user data is in response.data.data
        } catch (error) {
            console.log(error);
            // Handle error (e.g., show a message or redirect)
        }
    };

    const handleLogout = async () => {
        try {
            await axiosinstance({
                method: "POST",
                url: "/admin/logout"
            });
            navigate('/'); // Redirect to home page or login page after logout
        } catch (error) {
            console.log(error);
            // Handle error (e.g., show a message)
        }
    };

    useEffect(() => {
        fetchAdminProfile();
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    return (
        <div>
            <h1>{user?.name}</h1>
            <h1>{user?.email}</h1>
            <button className='btn btn-primary'>Edit Profile</button><br />
            <button className='btn btn-secondary' onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default AdminProfile;
