import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body";
import store from "../Utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Search result on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  console.log(body);
});
