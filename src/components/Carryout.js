import React from "react";
import PaymentInfo from "./PaymentInfo";
import CartTotalInfo from "./CartTotalInfo";
import { useTheme } from "@emotion/react";

const Carryout = ({ form, handleFormChange, submitOrder, errorMessage }) => {
  const theme = useTheme();

  const fieldsetStyle = {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
    color: theme.palette.primary.text,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitOrder();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset style={fieldsetStyle}>
        <div className="styled-h1">Customer Information</div>
        <div className="styled-div">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleFormChange}
          ></input>
        </div>
        <div className="styled-div">
          <label>Phone:</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="123-456-7890"
            value={form.phoneNumber}
            onChange={handleFormChange}
          ></input>
        </div>
      </fieldset>
      <PaymentInfo handleFormChange={handleFormChange} />
      <CartTotalInfo page="checkout" errorMessage={errorMessage} />
    </form>
  );
};

export default Carryout;
