import React, { useEffect, useState } from "react";
import { axiosinstance } from "../config/axiosinstance";

function Fooditems() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchFoodItems = async () => {
        try {
            const response = await axiosinstance.get('/api/v1/fooditems/allfood');
            console.log('Food items:', response.data);
        } catch (error) {
            console.error("Error fetching food items:", error);
        }
    };
    useEffect(() => {
        fetchFoodItems();
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (data.length === 0) {
        return <p>No menu found.</p>;
    }

  return (
    <div>
 <h1>Hotel List</h1>
            <div className="hotel-list">
                {data.map((menu) => (
                   <p>{menu?.price}</p>
                  
                ))}
            </div>

    </div>
  )
}

export default Fooditems