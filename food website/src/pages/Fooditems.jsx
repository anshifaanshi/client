import React, { useEffect, useState } from "react";
import { axiosinstance } from "../config/axiosinstance";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import { Link } from "react-router-dom";

function Fooditems() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFoodItems = async () => {
        try {
            const response = await axiosinstance.get('fooditems/allfood');
            console.log('Food items:', response.data); // Check the data format in the console
            setData(response.data); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching food items:", error);
            setError("Failed to fetch food items."); // Set error state
        } finally {
            setLoading(false); // Ensure loading is set to false after the fetch is complete
        }
    };

    useEffect(() => {
        fetchFoodItems();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>; // Display error message if there's an error
    }

    if (data.length === 0) {
        return <p>No menu found.</p>;
    }

    const addToCart = async (menu) => {
        try {
            const response = await axiosinstance({
                url: "/Cart/add-to-cart",
                method: "POST",
                data: { foodItemId: menu._id }, // Correctly pass the FoodItemId
            });
            console.log('Response:', response);
            toast.success('Food item added to cart', {
                position: 'top-right', // Use the correct string for the position
                autoClose: 3000, // Auto close after 3 seconds
            });
        } catch (error) {
            console.error('Error adding to cart:', error);
            toast.error('Item could not be added to cart', {
                position: 'top-right', // Use the correct string for the position
                autoClose: 3000, // Auto close after 3 seconds
            });
        }
    };
    
    

    return (
        <div>
            <h1>Food List</h1>
            <div className="food-list">
                {data.map((menu) => (
                    <div key={menu._id} className="food-item">
                        <h2>{menu.name}</h2>
                        <p>Description: {menu.description}</p>
                        <p>Price: ${menu.price}</p>
                        <p>Category ID: {menu.category}</p>
                        {/* Add more fields as necessary */}
                        <button onClick={() => addToCart(menu)}>Add To Cart</button>
                        <Link to='/Cart/getcart'>
                            <button>Show Cart</button>
                        </Link>
                    </div>
                ))}
            </div>
            <ToastContainer /> {/* Toast notification container */}
        </div>
    );
}

export default Fooditems;
