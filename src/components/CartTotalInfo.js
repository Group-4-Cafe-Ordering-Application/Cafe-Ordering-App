import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

const CartTotalInfo = ({ page, errorMessage = "" }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const timerRef = useRef();
  const { cart, getSubtotal, getTax, getTotal } = useCart();
  const [errorMsg, setErrorMsg] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setErrorMessageWithTimeout(errorMessage);
    return () => clearTimeout(timerRef.current);
  }, [errorMessage, page]);

  const setErrorMessageWithTimeout = (message) => {
    clearTimeout(timerRef.current);
    setErrorMsg(message);
    timerRef.current = setTimeout(() => {
      setErrorMsg("");
    }, 10000);
  };

  const handleClick = () => {
    if (page === "cart") {
      if (cart.length > 0) {
        navigate("/checkout");
      } else {
        setErrorMessageWithTimeout("Please add items to your cart first!");
      }
    } else if (page === "checkout") {
      setErrorMessageWithTimeout(errorMessage);
    }
  };

  const style = {
    backgroundColor: isHovered
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
  };

  function getButtonText() {
    if (page === "cart") {
      return "Checkout";
    } else if (page === "checkout") {
      return "Place Order";
    } else {
      return null;
    }
  }

  return (
    <fieldset
      style={{
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.primary.text,
      }}
    >
      <div className="styled-h1">Ready to submit order?</div>
      <div className="error-msg" style={{ color: theme.palette.errorMessage }}>
        {errorMsg}
      </div>
      <div className="flex flex-row justify-between items-center">
        <button
          className="checkout-btn"
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={style}
        >
          {getButtonText()}
        </button>
        <div className="flex flex-col items-end">
          <div>Subtotal: ${getSubtotal().toFixed(2)}</div>
          <div>Tax: ${getTax().toFixed(2)}</div>
          <div className="text-2xl font-bold">
            Total: ${getTotal().toFixed(2)}
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default CartTotalInfo;
