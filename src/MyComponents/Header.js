import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./Utils/UserContext";

const HeaderComponent = () => {
  // const { userInfo } = useContext(UserContext);
  const value = useContext(UserContext);
  console.log(value);
  const [title, setTitle] = useState("Food Villa");
  const [isChanged, setIsChanged] = useState(true);
  console.log("re-redered");
  const changeTitle = () => {
    if (isChanged) {
      setIsChanged(false);
      setTitle("New Title");
    } else {
      setIsChanged(true);

      setTitle("Food Villa");
    }
  };

  // useSelector
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  console.log(cartItems);
  return (
    <Wrapper>
      <div className="header">
        <h1 data-testid="title" id="hello" className="text-2xl font-bold">
          {title}
        </h1>
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

            <li>
              <Link to="/about/profile">Profile</Link>
            </li>
            <li>
              <Link to="/instamart">Instamart</Link>
            </li>
            <Link to="/cart">
              <li data-testid="cart">Cart- {cartItems.length} items</li>
            </Link>
            {/* <li>{userInfo.user.name}</li> */}
            <li onClick={changeTitle}>Click</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .nav-items ul li {
    cursor: pointer;
  }
`;

export default HeaderComponent;
