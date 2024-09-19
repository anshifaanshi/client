import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate and useParams
import { axiosinstance } from "../config/axiosinstance"; // Import axiosinstance
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications

const Hoteldetails = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // Get the hotel ID from the URL params
    const navigate = useNavigate(); // Initialize navigate for dynamic routing

    const fetchHotelsdetails = async () => {
        try {
            if (!id) {
                throw new Error("Hotel ID is missing");
            }
            const response = await axiosinstance.get(`/hotel/hotelprofile/${id}`);
            setData(response?.data?.data || {});
            console.log('Hotel details fetchedet:', response);
        } catch (error) {
            console.error("Error fetching hotel details:", error);
            toast.error("Failed to retrieve hotel details.");
        } finally {
            setLoading(false);
        }
    };
    

    const addToCart = async () => {
        try {
            const response = await axiosinstance({
                url: "cart/add-to-cart",
                method: "POST",
                data: { FoodItemId: data.id }
            });
            console.log('Add to cart response:', response);
            toast.success('Food item added to cart');
        } catch (error) {
            toast.error("Item couldn't be added to cart");
            console.error("Error adding item to cart:", error);
        }
    };

    useEffect(() => {
        fetchHotelsdetails();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data || Object.keys(data).length === 0) {
        return <p>No hotel details found.</p>;
    }

    return (
        <div>
            <h2>Hotel Details</h2>
            <div className="flex w-full">
                <div className="w-8/12 my-10">
                    <h1 className="text-3xl">{data?.title}</h1>
                    <h1>{data?.description}</h1>
                    <h1>{data?.price}</h1>
                    <h1>{data?.duration}</h1>

                    {/* Navigate to another profile page */}
                    <button onClick={() => navigate('/fooditems/allfood')} className="btn btn-primary">
                        Menu
                    </button>
                </div>
                <div className="w-5/12">
                    <p>{data?.email}</p>
                    <p>{data?.isActive ? 'Active' : 'Inactive'}</p>
                    <img src={data?.image} alt="Hotel" />
                </div>
            </div>
        </div>
    );
};

export default Hoteldetails;
