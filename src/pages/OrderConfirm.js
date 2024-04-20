import React from "react";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";

function OrderConfirm() {
  const location = useLocation();
  const { orderID } = location.state || {};
  const theme = useTheme();

  return (
    <Layout title="Order Confirmation">
      <div
        className="flex flex-col items-center justify-center mx-auto"
        style={{ color: theme.palette.primary.text }}
      >
        <div>Your order has been submitted!</div>
        <div>Order Number: {orderID}</div>
        <p>
          Thank you for your order. We will notify you when it is ready for
          pickup or delivery.
        </p>
      </div>
    </Layout>
  );
}

export default OrderConfirm;
