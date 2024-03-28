import React, { useState } from "react";
import MenuList from "../components/MenuList";
import ItemsDisplay from "../components/ItemsDisplay";
import Layout from "../components/Layout";

function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Layout title="Cafe Home Page">
      <div className="flex flex-row justify-between md:-ml-6 mt-2">
        <MenuList setSelectedCategory={setSelectedCategory} />
        <ItemsDisplay category={selectedCategory} />
      </div>
    </Layout>
  );
}

export default MainPage;
