import React from "react";
import Layout from "../components/Layout";
import { useCart } from "../context/cartContext";
import { useTheme } from "@emotion/react";
import AddSVG from "../svgs/AddSVG";
import SubtSVG from "../svgs/SubtSVG";
import CartTotalInfo from "../components/CartTotalInfo";

function Cart() {
  const theme = useTheme();
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <Layout title="Cafe Cart">
      <div
        className="border-2 rounded-lg p-2 sm:w-4/6 m-2"
        style={{
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.secondary.main,
          color: theme.palette.primary.text,
        }}
      >
        {cart.length < 1 ? (
          <div className="text-2xl pl-2">Your cart is Empty!</div>
        ) : (
          cart.map((item, index) => (
            <div className="flex flex-row mt-2" key={index}>
              {/* Display item name */}
              <div className="flex justify-start p-2 text-xl text-wrap w-1/4 sm:w-2/5">
                {item.name}
              </div>

              {/* Display item total price */}
              <div className="flex items-center justify-end p-2 text-lg text-wrap w-1/4 sm:w-1/5">
                {item.price * item.quantity}
              </div>

              <div className="flex flex-row items-center justify-end sm:justify-start w-1/2 sm:w-2/5">
                {/* Button to remove item / remove 1 from quantity */}
                <button
                  className="mx-2 pt-1"
                  onClick={() => removeFromCart(item.id)}
                >
                  <SubtSVG />
                </button>
                {/* Display quantity */}
                <div
                  className="flex items-center justify-center border-2 p-2 text-xl min-w-11 h-10"
                  style={{
                    borderColor: theme.palette.secondary.main,
                  }}
                >
                  {item.quantity}
                </div>
                {/* Button to add to quantity */}
                <button className="mx-2 pt-1" onClick={() => addToCart(item)}>
                  <AddSVG />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <CartTotalInfo page="cart" />
    </Layout>
  );
}

export default Cart;
