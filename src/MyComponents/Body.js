import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ResturentCard from "./ResturentCard.js";
import Shimmer from "./Shimmer.js";
import useOnline from "./Utils/useOnline.js";

const Body = () => {
  const [data, setData] = useState(null);
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

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴 Offline, Please check your internet connection</h1>;
  }

  if (!data) {
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
          style={{
            display: "inline-block",
            margin: "20px 20px",
            padding: "3px 5px",
          }}
          className="border-2"
        />

        <button
          onClick={() => {
            let filteredData = filterData();
            setData(filteredData);
          }}
          style={{ padding: "3px 14px" }}
          className="border-2"
        >
          Search
        </button>
      </div>
      <div className="card-section">
        {data ? (
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
