import React from "react";
import Layout from "../components/Layout";
import { useTheme } from "@emotion/react";

function Rewards() {
  const theme = useTheme();
  return (
    <Layout title="Cafe Rewards">
      <div
        className="flex justify-center items-center h-screen text-2xl"
        style={{ color: theme.palette.primary.text }}
      >
        Rewards program coming soon!
      </div>
    </Layout>
  );
}

export default Rewards;
