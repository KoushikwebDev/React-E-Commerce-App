import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/MyComponents/Body";
import { Footer } from "./src/MyComponents/Footer";
import HeaderComponent from "./src/MyComponents/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayOut = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

root.render(<AppLayOut />);
