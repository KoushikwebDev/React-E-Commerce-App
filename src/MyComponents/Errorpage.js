import React from "react";
import { useRouteError } from "react-router-dom";

function Errorpage() {
  const err = useRouteError();
  console.log(err);
  return (
    <h1>
      Oops this page does not exits. {err.status} {err.statusText}
    </h1>
  );
}

export default Errorpage;
