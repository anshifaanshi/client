import React, { useEffect, useState } from "react";
import { axiosinstance } from "../config/axiosinstance";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";

export const ProfilePage = () => {
    const [user, setUser] = useState(null); // Start with null

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchUserProfile = async () => {
        try {
            const response = await axiosinstance({
                method: "GET",
                url: `/user/profile`, // Ensure userID is defined correctly
            });
            console.log("Full Response Data:", response?.data); // Log full response
            console.log("User Data:", response?.data?.data); // Log actual user data
            setUser(response?.data?.data); // Set 'userexist' to user state
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            await axiosinstance({
                method: "POST",
                url: "/user/logout",
            });
            dispatch(clearUser());
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserProfile(); // Fetch the profile data
    }, []);
console.log("heelow wrld")
    // Conditional rendering: show loading message if user data hasn't been fetched yet
    if (!user) {
        return <p>Loading user data...</p>;
    }

    return (
        <div>
            <h1>{user.name}</h1> {/* Make sure 'name' exists in the user data */}
            <h1>{user.email}</h1> {/* Make sure 'email' exists in the user data */}
            <img src={user.profilePic} alt="Profile" /> {/* Check if 'profilePic' exists */}
            
            <button className="btn btn-outline">Edit</button>
            <br />
            <button onClick={handleLogout} className="btn btn-secondary">Log-out</button>
        </div>
    );
};
