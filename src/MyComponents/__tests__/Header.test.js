import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import HeaderComponent from "../Header";
import store from "../Utils/store";
import { StaticRouter } from "react-router-dom/server";

test("title shoult appear on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  const title = header.getByTestId("title");
  console.log(title);
  expect(title.id).toBe("hello");
  // check if logo is loaded ?
});

test("Cart should have 0 item", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  const cart = header.getByTestId("cart");
  console.log(cart);
  expect(cart.innerHTML).toBe("Cart- 0 items");
  // check if logo is loaded ?
});
