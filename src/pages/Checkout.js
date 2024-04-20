import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useCart } from "../context/cartContext";
import Layout from "../components/Layout";
import Carryout from "../components/Carryout";
import Delivery from "../components/Delivery";
import axios from "axios";
import "../pages/Checkout.css";
import StyledButton from "../components/StyledButton";

function Checkout() {
  const navigate = useNavigate();
  const { userEmail } = useContext(AuthContext);
  const { cart, getTotal, clearCart } = useCart();
  const [selectedButton, setSelectedButton] = useState("Carryout");
  const [errorMessage, setErrorMessage] = useState("");

  const getFormData = async () => {
    try {
      const response = await axios.post(
        "https://cafe-app-api-7aztvwb6hq-uc.a.run.app/user",
        {
          userEmail: userEmail,
        }
      );

      setForm({
        ...form,
        firstname:
          response.data.cust_firstname === null
            ? ""
            : response.data.cust_firstname,
        lastname:
          response.data.cust_lastname === null
            ? ""
            : response.data.cust_lastname,
        phoneNumber: response.data.phone === null ? "" : response.data.phone,
        email: userEmail,
        delivery: {
          ...form.delivery,
          address:
            response.data.delivery_address === null
              ? ""
              : response.data.delivery_address,
          city:
            response.data.delivery_city === null
              ? ""
              : response.data.delivery_city,
          zipCode:
            response.data.delivery_zip === null
              ? ""
              : response.data.delivery_zip,
          state:
            response.data.delivery_state === null
              ? ""
              : response.data.delivery_state,
        },
        billing: {
          ...form.billing,
          address:
            response.data.billing_address === null
              ? ""
              : response.data.billing_address,
          city:
            response.data.billing_city === null
              ? ""
              : response.data.billing_city,
          zipCode:
            response.data.billing_zip === null ? "" : response.data.billing_zip,
          state:
            response.data.billing_state === null
              ? ""
              : response.data.billing_state,
          cardNumber: "",
          expDate: "",
          cvc: "",
        },
      });
    } catch (error) {
      console.error("There was an error fetching the user information:", error);
      // Fail-safe if fetching user information fails
      setForm({
        ...form,
        firstname: "",
        lastname: "",
        phoneNumber: "",
        email: userEmail,
        delivery: {
          ...form.delivery,
          address: "",
          city: "",
          zipCode: "",
          state: "",
        },
        billing: {
          ...form.billing,
          address: "",
          city: "",
          zipCode: "",
          state: "",
          cardNumber: "",
          expDate: "",
          cvc: "",
        },
      });
    }
  };

  const [form, setForm] = useState(getFormData);

  const handleFormChange = (e, propName) => {
    if (propName === "delivery") {
      setForm({
        ...form,
        delivery: {
          ...form.delivery,
          [e.target.name]: e.target.value,
        },
      });
    } else if (propName === "billing") {
      setForm({
        ...form,
        billing: {
          ...form.billing,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleModeChange = (type) => {
    setErrorMessage("");
    setSelectedButton(type);
  };

  const submitOrder = async () => {
    setErrorMessage("");
    if (getTotal() <= 0) {
      setErrorMessage("Your cart is empty.");
      return;
    }
    const errorMsg = validateInformation();
    if (errorMsg === "") {
      try {
        await axios.post(
          "https://cafe-app-api-7aztvwb6hq-uc.a.run.app/customer",
          {
            customer: form,
          }
        );
        let order_result = await axios.post(
          "https://cafe-app-api-7aztvwb6hq-uc.a.run.app/order",
          {
            order_price: getTotal(),
            customer_email: userEmail,
            delivery_status: selectedButton === "Delivery" ? 1 : 0,
          }
        );
        let orderID = order_result.data.order_id;
        await axios.post(
          "https://cafe-app-api-7aztvwb6hq-uc.a.run.app/orderDetails",
          {
            order: {
              order_id: orderID,
              cart: cart,
              customer_email: userEmail,
            },
          }
        );
        clearCart();
        // clear form data for potential errors using back button
        setForm({ ...form, cardNumber: "", expDate: "", cvc: "" });
        navigate("/orderConfirm", { state: { orderID: orderID } });
      } catch (error) {
        console.error("There was an error:", error);
        if (error.response) {
          setErrorMessage(error.response.data);
        } else {
          setErrorMessage("Error submitting order:", error);
        }
      }
    } else {
      setErrorMessage(errorMsg);
    }
  };

  function validateAddress(address, type) {
    if (address.address === "") {
      return `Please enter your ${type} address`;
    }
    const addressRegex = /^[a-zA-Z0-9\s,'\-\.]*$/;
    if (!addressRegex.test(address.address)) {
      return `Please enter a valid ${type} address`;
    }
    if (address.city === "") {
      return `Please enter your ${type} city`;
    }
    if (address.zipCode === "") {
      return `Please enter your ${type} zip code`;
    }
    const zipCodeRegex = /^\d{5}$/;
    if (!zipCodeRegex.test(address.zipCode)) {
      return `Please enter a valid 5 digit ${type} zip code, Ex: 12345`;
    }
    if (address.state === "") {
      return `Please select your ${type} state`;
    }
    return "";
  }

  function validateInformation() {
    // Handle no form
    if (!form) {
      return "Please fill out order form";
    }
    // Name validation
    if (form.firstname === "") {
      return "Please enter your first name";
    }
    if (form.lastname === "") {
      return "Please enter your last name";
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
      let message = validateAddress(form.delivery, "delivery");
      if (message !== "") {
        return message;
      }
    }
    // Payment validation
    if (form.billing.cardNumber === "") {
      return "Please enter your card number";
    }
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(form.billing.cardNumber)) {
      return "Please enter a valid 16-digit card number";
    }
    if (form.billing.expDate === "") {
      return "Please enter your card expiration date";
    }
    const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}(\d{2})?$/;
    if (!expDateRegex.test(form.billing.expDate)) {
      return "Please enter a valid expiration date in MM/YY format";
    }
    const month = new Date().getMonth() + 1;
    const year = parseInt(new Date().getFullYear());
    const yearLastTwo = parseInt(new Date().getFullYear().toString().slice(-2));
    const formMonth = parseInt(form.billing.expDate.split("/")[0]);
    const formYear = parseInt(form.billing.expDate.split("/")[1]);

    if (formYear.toString().length <= 2) {
      if (formYear > yearLastTwo + 5) {
        return "Please enter expiration data in MM/YYYY format";
      }
      if (
        formYear < yearLastTwo ||
        (formMonth < month && formYear === yearLastTwo)
      ) {
        return "Expiration date cannot be in the past";
      }
    } else {
      if (formYear < year || (formMonth < month && formYear === year)) {
        return "Expiration date cannot be in the past";
      }
    }

    if (form.billing.cvc === "") {
      return "Please enter your card CVC";
    }
    const cvcRegex = /^\d{3}$/;
    if (!cvcRegex.test(form.billing.cvc)) {
      return "Please enter a valid 3-digit CVC";
    }
    let message = validateAddress(form.billing, "billing");
    if (message !== "") {
      return message;
    }

    // Return empty string if all validations pass
    return "";
  }

  return (
    <Layout title="Checkout">
      <div className="flex justify-evenly">
        <StyledButton
          type="Carryout"
          handleModeChange={handleModeChange}
          selectedButton={selectedButton}
        />
        <StyledButton
          type="Delivery"
          handleModeChange={handleModeChange}
          selectedButton={selectedButton}
        />
      </div>
      {/* Display delivery/carryout mode */}
      {selectedButton === "Delivery" ? (
        <Delivery
          form={form}
          handleFormChange={handleFormChange}
          submitOrder={submitOrder}
          errorMessage={errorMessage}
        />
      ) : (
        <Carryout
          form={form}
          handleFormChange={handleFormChange}
          submitOrder={submitOrder}
          errorMessage={errorMessage}
        />
      )}
    </Layout>
  );
}

export default Checkout;
