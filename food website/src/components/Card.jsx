import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ hotels }) => {
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={hotels?.image} alt={hotels?.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{hotels?.name}</h2>
                <p>Address: {hotels?.address?.street}, {hotels?.address?.city}, {hotels?.address?.state}, {hotels?.address?.country}</p>
                <p>Rating: {hotels?.rating} / 5</p>
                <p>Cuisine: {hotels?.cuisineType?.join(', ')}</p>
                <p>Phone: {hotels?.phone}</p>
                <p>Email: {hotels?.email}</p>
                <div className="card-actions justify-end">
                    {/* Correct usage of template literals */}
                    <Link to={`hotel/hotelprofile/${hotels?.id}`}>
                        <button>See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
