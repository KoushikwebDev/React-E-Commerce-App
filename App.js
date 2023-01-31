import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/MyComponents/Body";
import { Footer } from "./src/MyComponents/Footer";
import HeaderComponent from "./src/MyComponents/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./src/MyComponents/About";
import Errorpage from "./src/MyComponents/Errorpage";
import Contact from "./src/MyComponents/Contact";
import ResturantMenu from "./src/MyComponents/ResturantMenu";
import Profile from "./src/MyComponents/Profile";
import Shimmer from "./src/MyComponents/Shimmer";

// lazy Loading ❤❤❤💛
const Instamart = lazy(() => import("./src/MyComponents/Instamart"));
const About = lazy(() => import("./src/MyComponents/About"));

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
        path: "/about", // parentpath/${profile}
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        errorElement: <Errorpage />,

        children: [
          {
            path: "profile", // parentpath/${profile}
            element: <Profile />,
          },
        ],
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
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
