import React from "react";
import Layout from "../components/Layout";

function OrderConfirm() {
  return (
    <Layout title="Order Confirmation">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div>Your order has been submitted!</div>
        <p>
          Thank you for your order. We will notify you when it is ready for
          pickup or delivery.
        </p>
      </div>
    </Layout>
  );
}

export default OrderConfirm;
