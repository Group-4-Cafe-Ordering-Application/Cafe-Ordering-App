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
          <label htmlFor="firstname">First Name:</label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="John"
            value={form.firstname}
            onChange={handleFormChange}
          ></input>
        </div>
        <div className="styled-div">
          <label htmlFor="lastname">Last Name:</label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Doe"
            value={form.lastname}
            onChange={handleFormChange}
          ></input>
        </div>
        <div className="styled-div">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="tel"
            name="phoneNumber"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={form.phoneNumber}
            onChange={handleFormChange}
          ></input>
        </div>
      </fieldset>
      <PaymentInfo form={form} handleFormChange={handleFormChange} />
      <CartTotalInfo page="checkout" errorMessage={errorMessage} />
    </form>
  );
};

export default Carryout;
