import { useContext } from "react";
import UserContext from "./Utils/UserContext";

const ResturentCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { userInfo } = useContext(UserContext);
  //   console.log(props.data.name);
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        style={{ height: "150px", width: "200px" }}
      />
      <h2>{name}</h2>
      <h3 style={{ width: "200px" }}>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h4>{userInfo.user.skills}</h4>
    </div>
  );
};

export default ResturentCard;
