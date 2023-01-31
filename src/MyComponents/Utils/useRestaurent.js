import { useState, useEffect } from "react";

const useRestaurent = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  // get data from api
  useEffect(() => {
    getResturantInfo();
  }, []);

  const getResturantInfo = async () => {
    try {
      let response = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
          id
      );
      let json = await response.json();
      console.log(json.data);
      setRestaurant(json.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //   return restuarent data
  return restaurant;
};

export default useRestaurent;
