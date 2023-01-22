import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [title, setTitle] = useState("Food Villa");
  const [isChanged, setIsChanged] = useState(true);
  console.log("re-redered");
  const changeTitle = () => {
    if (isChanged) {
      setTitle("New Title");
      setIsChanged(false);
    } else {
      setTitle("Food Villa");
    }
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li onClick={changeTitle}>Click</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
