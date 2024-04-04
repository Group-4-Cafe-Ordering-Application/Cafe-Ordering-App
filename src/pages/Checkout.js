import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import Carryout from "../components/Carryout";
import Delivery from "../components/Delivery";
import "../pages/Checkout.css";

function Checkout() {
  const theme = useTheme();
  const navigate = useNavigate();
  const defaultForm = {
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
    cardNumber: "",
    expDate: "",
    cvc: "",
  };
  const [form, setForm] = useState(defaultForm);
  const [selectedButton, setSelectedButton] = useState("Carryout");
  const [errorMessage, setErrorMessage] = useState("");

  const StyledButton = styled.button`
    border-color: ${(props) =>
      props.isSelected
        ? theme.palette.primary.light
        : theme.palette.secondary.main};
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.text};
    &:hover {
      background-color: ${theme.palette.secondary.main};
      color: ${theme.palette.primary.text};
    }
    &:active {
      border-color: ${theme.palette.primary.light};
    }
  `;

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleModeChange = (type) => {
    setErrorMessage("");
    setSelectedButton(type);
  };

  const submitOrder = () => {
    console.log(form);
    const errorMsg = validateInformation();
    if (errorMsg === "") {
      navigate("/orderConfirm");
    } else {
      setErrorMessage(errorMsg);
    }
  };

  function getDisplay() {
    let display;
    // Delivery Display
    if (selectedButton === "Delivery") {
      display = (
        <Delivery
          form={form}
          setForm={setForm}
          handleFormChange={handleFormChange}
          submitOrder={submitOrder}
          errorMessage={errorMessage}
        />
      );
    }
    // Carryout Display
    else {
      display = (
        <Carryout
          form={form}
          handleFormChange={handleFormChange}
          submitOrder={submitOrder}
          errorMessage={errorMessage}
        />
      );
    }
    return display;
  }

  function validateInformation() {
    // Handle no form
    if (!form) {
      return "Please fill out order form";
    }
    // Name validation
    if (form.name === "") {
      return "Please enter your name";
    }
    // Phone validation
    if (form.phoneNumber === "") {
      return "Please enter your phone number";
    }
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneNumberRegex.test(form.phoneNumber)) {
      return "Please enter a valid 10 digit phone number, Ex: 123-456-7890";
    }
    // Delivery validation
    if (selectedButton === "Delivery") {
      if (form.address === "") {
        return "Please enter your delivery address";
      }
      const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
      if (!addressRegex.test(form.address)) {
        return "Please enter a valid address";
      }
      if (form.city === "") {
        return "Please enter your city";
      }
      if (form.zipCode === "") {
        return "Please enter your zip code";
      }
      const zipCodeRegex = /^\d{5}$|^\d{5}-\d{4}$/;
      if (!zipCodeRegex.test(form.zipCode)) {
        return "Please enter a valid 5 or 9 digit zip code, Ex: 12345 or 12345-6789";
      }
      if (form.state === "") {
        return "Please select your state";
      }
    }
    // Payment validation
    if (form.cardNumber === "") {
      return "Please enter your card number";
    }
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(form.cardNumber)) {
      return "Please enter a valid 16-digit card number";
    }
    if (form.expDate === "") {
      return "Please enter your card expiration date";
    }
    const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expDateRegex.test(form.expDate)) {
      return "Please enter a valid expiration date in MM/YY format";
    }
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear().toString().slice(-2);
    const formMonth = form.expDate.split("/")[0];
    const formYear = form.expDate.split("/")[1];
    if (formYear < year || (formMonth < month && formYear === year)) {
      return "Expiration date cannot be in the past";
    }
    if (form.cvc === "") {
      return "Please enter your card CVC";
    }
    const cvcRegex = /^\d{3}$/;
    if (!cvcRegex.test(form.cvc)) {
      return "Please enter a valid 3-digit CVC";
    }

    // Return empty string if all validations pass
    return "";
  }

  return (
    <Layout title="Checkout">
      <div className="flex justify-evenly">
        <StyledButton
          className="styled-button"
          isSelected={selectedButton === "Carryout"}
          onClick={() => handleModeChange("Carryout")}
        >
          Carryout
        </StyledButton>
        <StyledButton
          className="styled-button"
          isSelected={selectedButton === "Delivery"}
          onClick={() => handleModeChange("Delivery")}
        >
          Delivery
        </StyledButton>
      </div>
      {/* Display delivery/carryout mode */}
      {getDisplay()}
    </Layout>
  );
}

export default Checkout;
