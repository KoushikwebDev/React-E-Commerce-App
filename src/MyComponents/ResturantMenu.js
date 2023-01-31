import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurent from "./Utils/useRestaurent";

function ResturantMenu() {
  const { id } = useParams();

  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurent(id);

  // setRestaurant(useRestaurent(id));

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div
      className="menu"
      style={{ display: "flex", gap: "20rem", justifyContent: "start" }}
    >
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurant?.cloudinaryImageId
          }
          style={{ height: "150px", width: "200px" }}
        />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResturantMenu;
