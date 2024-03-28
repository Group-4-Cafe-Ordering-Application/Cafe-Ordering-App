import React from "react";
import MenuItem from "./MenuItem";

function ItemsDisplay({ category }) {
  // Temporary data for testing
  // Should fetch from API in real app
  const itemsByCategory = {
    Drinks: [
      {
        id: 1,
        name: "Coffee",
        price: 2.99,
        description: "Fresh brewed coffee",
      },
      { id: 2, name: "Tea", price: 2.5, description: "Selection of hot teas" },
      { id: 3, name: "Soda", price: 3.99, description: "Soft drinks" },
    ],
    Food: [
      { id: 4, name: "Bread", price: 4.99, description: "Artisan breads" },
      { id: 5, name: "Pizza", price: 7.99, description: "Pepperonni pizza" },
      {
        id: 6,
        name: "Sandwich",
        price: 5.99,
        description: "Ham and cheese sandwich",
      },
      {
        id: 7,
        name: "Bacon, Sausage & Egg Wrap",
        price: 6.99,
        description: "Bacon, sausage, egg and cheese wrap",
      },
    ],
  };

  const items = itemsByCategory[category] || [];

  return (
    <div className="flex flex-row flex-wrap gap-4 justify-between mx-auto">
      {items.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default ItemsDisplay;
