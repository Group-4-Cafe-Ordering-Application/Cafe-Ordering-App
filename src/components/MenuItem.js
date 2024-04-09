import React, { useState } from "react";
import AddSVG from "../svgs/AddSVG";
import { useTheme } from "@emotion/react";
import { useCart } from "../context/cartContext";
import "./MenuItem.css";

function MenuItem({ id, name, price, size, description }) {
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
      className="item-card shadow-lg sm:flex-row w-full sm:w-72 text-center"
      style={{
        backgroundColor: theme.palette.primary.main,
        boxShadow: "1px 1px 4px 4px " + theme.palette.primary.buttonShadow,
        color: theme.palette.primary.text,
      }}
    >
      <div className="item-name">{name}</div>
      {size && <div className="item-size">{" (" + size + ")"}</div>}
      <div className="item-description">{description}</div>
      <div className="item-price">${price.toFixed(2)}</div>
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
