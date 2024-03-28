import React, { useState } from "react";
import AddSVG from "../svgs/AddSVG";
import { useTheme } from "@emotion/react";
import { useCart } from "../context/cartContext";
import "./MenuItem.css";

function MenuItem({ id, name, description, price }) {
  const theme = useTheme();
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");

  function addItemToCart(id, name) {
    addToCart({ id, name, price });
    setMessage("Added to Cart!");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }

  return (
    <div
      className="flex flex-col rounded-lg p-4 items-center justify-center shadow-lg mx-auto h-auto w-full md:w-2/5"
      style={{
        backgroundColor: theme.palette.primary.main,
        boxShadow: "1px 1px 4px 4px " + theme.palette.primary.buttonShadow,
      }}
    >
      <div className="item-name" style={{ color: theme.palette.primary.text }}>
        {name}
      </div>
      <div
        className="item-description"
        style={{ color: theme.palette.secondary.text }}
      >
        {description}
      </div>
      <div
        className="item-price"
        style={{ color: theme.palette.secondary.text }}
      >
        ${price.toFixed(2)}
      </div>
      <button
        className="add-button"
        onClick={() => addItemToCart(id, name, price)}
      >
        <AddSVG />
        <div>{message}</div>
      </button>
    </div>
  );
}

export default MenuItem;
