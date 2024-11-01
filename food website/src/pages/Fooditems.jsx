import React, { useEffect, useState } from "react";
import { axiosinstance } from "../config/axiosinstance";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from "react-router-dom";

function Fooditems() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFoodItems = async () => {
        console.log("Fetching food items..."); 
        try {
            const response = await axiosinstance.get('fooditems/allfood');
            console.log('Food items fetched successfully:', response.data); 
            setData(response.data); 
        } catch (error) {
            console.error("Error fetching food items:", error);
            setError("Failed to fetch food items.");
        } finally {
            setLoading(false);
            console.log("Loading state set to false."); 
        }
    };

    const addToCart = async (foodItemId) => {
        try {
            const response = await axiosinstance.post('/cart/add-to-cart', { foodItemId });
            console.log('Response after adding to cart:', response.data); 
            toast.success('Food item added to cart!');
        } catch (error) {
            console.error('Error adding to cart:', error.response ? error.response.data : error.message); 
            toast.error(error.response?.data?.message || 'Please login');
        }
    };
    
    

    useEffect(() => {
        fetchFoodItems();
    }, []);

    if (loading) {
        console.log("Component is loading..."); 
        return <p>Loading...</p>;
    }

    if (error) {
        console.error("Error displayed to user:", error); 
        return <p>{error}</p>;
    }

    if (data.length === 0) {
        console.warn("No menu items found."); 
        return <p>No menu found.</p>;
    }

    return (
        <div className="menu container my-5">
            <h1 className="menuhead text-center mb-4">Menu</h1>
            <div className="row">
                {data.map((menu) => (
                    <div key={menu._id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="menubody card-body">
                                <h2 className="card-title">{menu.name}</h2>
                                <p className="card-text"><strong>Description:</strong> {menu.description}</p><br />
                                <p className="card-text"><strong>Price:</strong> ${menu.price.toFixed(2)}</p><br />
                                
                                <button 
                                    onClick={() => {
                                        const quantity = 1; // You can set this to a default value or allow user input for quantity
                                        console.log("Add to Cart button clicked for:", menu.name); 
                                        addToCart(menu._id, quantity);
                                    }} 
                                    className="btn btn-primary me-2"
                                >
                                    Add To Cart
                                </button>
                                <Link to="/Cart/getcart">
                                    <button className="btn btn-secondary">
                                        Show Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Fooditems;
