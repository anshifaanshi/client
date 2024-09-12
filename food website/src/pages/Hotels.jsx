
import React, { useEffect, useState } from "react";
import { axiosinstance } from "../config/axiosinstance"; // Import axiosinstance
import { Card } from "../components/Card";

export const Hotel = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchHotels = async () => {
        try {
            const response = await axiosinstance.get("/hotel/hotels"); // Use axiosinstance for API call
            setData(response?.data?.data || []);
            console.log(response);
        } catch (error) {
            console.error("Error fetching hotels:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHotels();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (data.length === 0) {
        return <p>No hotels found.</p>;
    }

    return (
        <div>
            <h1>Hotel List</h1>
            <div className="hotel-list">
                {data.map((hotel) => (
                    <Card hotels={hotel} key={hotel?._id} />
                ))}
            </div>
        </div>
    );
};
