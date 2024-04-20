import React from "react";
import { useTheme } from "@emotion/react";
import StateDropdown from "./StateDropdown";

function PaymentInfo({ form, handleFormChange }) {
  const theme = useTheme();

  return (
    <fieldset
      style={{
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.primary.text,
      }}
    >
      <div className="styled-h1">Payment Information</div>
      <div className="styled-div">
        <label htmlFor="card-number">Card Number:</label>
        <input
          id="card-number"
          className="w-48"
          type="text"
          name="cardNumber"
          value={form.billing.cardNumber}
          onChange={(e) => handleFormChange(e, "billing")}
        ></input>
      </div>
      <div className="styled-div">
        <label htmlFor="exp-date">Exp Date:</label>
        <input
          id="exp-date"
          className="w-20"
          type="text"
          name="expDate"
          value={form.billing.expDate}
          placeholder="mm/yy"
          onChange={(e) => handleFormChange(e, "billing")}
        ></input>
      </div>
      <div className="styled-div">
        <label htmlFor="cvc">CVC:</label>
        <input
          id="cvc"
          className="w-12"
          type="text"
          name="cvc"
          value={form.billing.cvc}
          onChange={(e) => handleFormChange(e, "billing")}
        ></input>
      </div>
      <div className="styled-h1">Billing Address</div>
      <div className="styled-div">
        <label htmlFor="billing-address">Address:</label>
        <input
          id="billing-address"
          type="text"
          name="address"
          placeholder="1234 Main St"
          value={form.billing.address}
          autoComplete="street-address"
          onChange={(e) => handleFormChange(e, "billing")}
        ></input>
      </div>
      <div className="styled-div">
        <label htmlFor="billing-city">City:</label>
        <input
          id="billing-city"
          type="text"
          name="city"
          placeholder="Raleigh"
          value={form.billing.city}
          onChange={(e) => handleFormChange(e, "billing")}
        ></input>
      </div>
      <div className="styled-div">
        <label htmlFor="billing-zip">Zip Code:</label>
        <input
          id="billing-zip"
          className="w-28"
          type="text"
          name="zipCode"
          placeholder="27603"
          value={form.billing.zipCode}
          onChange={(e) => handleFormChange(e, "billing")}
        ></input>
      </div>
      <div className="styled-div">
        <StateDropdown
          id="billing-state"
          handleFormChange={(e) => handleFormChange(e, "billing")}
          selectedState={form.billing.state}
        />
      </div>
    </fieldset>
  );
}

export default PaymentInfo;
