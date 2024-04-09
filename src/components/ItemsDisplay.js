import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";
import { useTheme } from "@emotion/react";

function ItemsDisplay({ category, categoryID }) {
  const [items, setItems] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const categoryIdString = categoryID.toString();
      try {
        const response = await axios.post("http://localhost:5000/menu", {
          categoryID: categoryIdString,
        });
        setItems(response.data);
      } catch (error) {
        console.error("There was an error fetching the menu items:", error);
      }
    };

    fetchData();
  }, [category]);

  return items.length !== 0 ? (
    <div className="flex flex-row flex-wrap justify-evenly w-full">
      {items.map((item) => (
        <MenuItem
          key={item.item_id}
          id={item.item_id}
          category={item.category_id}
          name={item.item}
          price={item.item_cost}
          size={item.item_size}
          description={item.Description}
        />
      ))}
    </div>
  ) : (
    <div
      className="flex text-center justify-center items-center w-full text-lg"
      style={{ color: theme.palette.primary.text }}
    >
      Error loading Menu
    </div>
  );
}

export default ItemsDisplay;
