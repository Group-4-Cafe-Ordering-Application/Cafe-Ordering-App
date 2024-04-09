import React from "react";
import { useTheme } from "@emotion/react";

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
        <label>Card Number:</label>
        <input
          className="w-48"
          type="text"
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleFormChange}
        ></input>
      </div>
      <div className="styled-div">
        <label>Exp Date:</label>
        <input
          className="w-20"
          type="text"
          name="expDate"
          value={form.expDate}
          placeholder="mm/yy"
          onChange={handleFormChange}
        ></input>
      </div>
      <div className="styled-div">
        <label>CVC:</label>
        <input
          className="w-12"
          type="text"
          name="cvc"
          value={form.cvc}
          onChange={handleFormChange}
        ></input>
      </div>
    </fieldset>
  );
}

export default PaymentInfo;
