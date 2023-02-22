import React from "react";
import { clearAllItem } from "./Utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  if (!cartItems.length)
    return (
      <h1 className="text-2xl font-bold text-center">
        Add Item In the Cart 😃
      </h1>
    );
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Cart Items</h1>
      <button
        className="bg-red-500 p-2"
        onClick={() => dispatch(clearAllItem())}
      >
        Clear Cart
      </button>
      {cartItems.map((item) => {
        return (
          <div className="flex mt-5 gap-10">
            <div className="w-[200px]">
              <img
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.cloudinaryImageId}`}
                alt="item-photo"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">{item.name}</h1>
              <h2>{item.description}</h2>
              <span>Price: {item.price / 100}</span>
              <span>InStock: {item.inStock}</span>
              <hr />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
