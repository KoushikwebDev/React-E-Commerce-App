import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ResturentCard from "./ResturentCard.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  // const [data, setData] = useState([
  //   {
  //     name: "Fench Fry",
  //     desc: "Alu Bro",
  //     url: "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "Burger King",
  //     desc: "Alu Bro",
  //     url: "https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "Snacks",
  //     desc: "Alu Bro",
  //     url: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/unhealthiest-foods-planet.jpg?quality=82&strip=1",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "Hello",
  //     desc: "Alu Bro",
  //     url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "Brother",
  //     desc: "Alu Bro",
  //     url: "https://www.iberdrola.com/documents/20125/39904/real_food_746x419.jpg/0c9185fa-b2dd-e1a6-602c-bca55f68e54e?t=1626673209445",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "Sister",
  //     desc: "Alu Bro",
  //     url: "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "Alex Resturent",
  //     desc: "Alu Bro",
  //     url: "https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "Dimond",
  //     desc: "Alu Bro",
  //     url: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/unhealthiest-foods-planet.jpg?quality=82&strip=1",
  //     rating: 4.5,
  //   },
  // ]);

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [resturent, setRestaurant] = useState(null);

  const inputRef = useRef();

  const filterData = () => {
    let response = resturent.filter((res) => {
      //   console.log(typeof searchText);
      if (inputRef.current.value == "") {
        // console.log("running");
        return resturent;
      } else {
        return res.data.name
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase());
      }
    });

    return response;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setData(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  if (!data.length) {
    <Shimmer />;
  }
  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            let filteredData = filterData();
            setData(filteredData);
          }}
        />

        <button
          onClick={() => {
            let filteredData = filterData();
            setData(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-section">
        {data.length ? (
          data.map((resturent, index) => {
            return (
              <Link
                to={`resturant/${resturent.data.id}`}
                key={resturent.data.id}
                style={{ textDecoration: "none" }}
              >
                <ResturentCard {...resturent.data} />
              </Link>
            );
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
};

export default Body;
