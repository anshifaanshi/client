import React, { useEffect, useState } from 'react';
import { axiosinstance } from '../../config/axiosinstance';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [loggedOut, setLoggedOut] = useState(false); // State to track logout
  const navigate = useNavigate();

  const fetchuserprofile = async () => {
    try {
      const response = await axiosinstance({
        method: "GET",
        url: "/user/profile",
      });
      setUser(response.data); 
      setLoading(false); 
    } catch (error) {
      console.error(error);
      setLoading(false); 
    }
  };

  const handlelogout = async () => {
    try {
      await axiosinstance({
        method: "POST",
        url: "/user/logout",
      });
      setLoggedOut(true); // Trigger the logout state
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchuserprofile();
  }, []);

  useEffect(() => {
    if (loggedOut) {
      navigate('/'); // Perform navigation after logout
    }
  }, [loggedOut, navigate]); // Dependency array listens for logout

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
      <button>Edit Profile</button><br />
      <button className='btn btn-secondary'>Edit user</button>
      <button className='btn btn-secondary' onClick={handlelogout}>Logout</button>
    </div>
  );
}

export default Profile;
