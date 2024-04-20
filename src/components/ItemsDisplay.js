import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";
import { useTheme } from "@emotion/react";

function ItemsDisplay({ category, categoryID }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const categoryIdString = categoryID.toString();
      try {
        const response = await axios.post(
          "https://cafe-app-api-7aztvwb6hq-uc.a.run.app/menu",
          {
            categoryID: categoryIdString,
          }
        );
        setItems(response.data);
      } catch (error) {
        console.error("There was an error fetching the menu items:", error);
        setError(true);
      }
    };

    fetchData();
  }, [category, categoryID]);

  return error ? (
    <div className="flex text-center justify-center w-full">
      Error Loading Database
    </div>
  ) : items.length !== 0 ? (
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
      Loading menu items...
    </div>
  );
}

export default ItemsDisplay;
