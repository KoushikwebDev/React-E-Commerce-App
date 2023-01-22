import React from "react";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <h1>Hello About</h1>
      <Outlet />
    </>
  );
}

export default About;
