import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/MyComponents/Body";
import { Footer } from "./src/MyComponents/Footer";
import HeaderComponent from "./src/MyComponents/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/MyComponents/About";
import Errorpage from "./src/MyComponents/Errorpage";
import Contact from "./src/MyComponents/Contact";
import ResturantMenu from "./src/MyComponents/ResturantMenu";

const AppLayOut = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Errorpage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Errorpage />,
      },

      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
        errorElement: <Errorpage />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  //   errorElement: <Errorpage />,
  // },
  // {
  //   path: "*",
  //   element: <Errorpage />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
