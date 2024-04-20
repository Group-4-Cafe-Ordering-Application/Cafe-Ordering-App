import React from "react";
import PaymentInfo from "./PaymentInfo";
import CartTotalInfo from "./CartTotalInfo";
import { useTheme } from "@emotion/react";
import StateDropdown from "./StateDropdown";

const Delivery = ({ form, handleFormChange, submitOrder, errorMessage }) => {
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
        <div className="styled-div">
          <label htmlFor="delivery-address">Address:</label>
          <input
            id="delivery-address"
            type="text"
            name="address"
            placeholder="1234 Main St"
            value={form.delivery.address}
            onChange={(e) => handleFormChange(e, "delivery")}
            autoComplete="street-address"
          ></input>
        </div>
        <div className="styled-div">
          <label htmlFor="delivery-city">City:</label>
          <input
            id="delivery-city"
            type="text"
            name="city"
            placeholder="Raleigh"
            value={form.delivery.city}
            onChange={(e) => handleFormChange(e, "delivery")}
          ></input>
        </div>
        <div className="styled-div">
          <label htmlFor="delivery-zip">Zip Code:</label>
          <input
            id="delivery-zip"
            className="w-28"
            type="text"
            name="zipCode"
            placeholder="27603"
            value={form.delivery.zipCode}
            onChange={(e) => handleFormChange(e, "delivery")}
          ></input>
        </div>
        <div className="styled-div">
          <StateDropdown
            id="delivery-state"
            handleFormChange={(e) => handleFormChange(e, "delivery")}
            selectedState={form.delivery.state}
          />
        </div>
      </fieldset>
      <PaymentInfo form={form} handleFormChange={handleFormChange} />
      <CartTotalInfo page="checkout" errorMessage={errorMessage} />
    </form>
  );
};

export default Delivery;
