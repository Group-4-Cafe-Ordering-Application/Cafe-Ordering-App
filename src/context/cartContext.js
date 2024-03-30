import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = Cookies.get("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    console.log(cart);
    Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
  });

  const addToCart = (item) => {
    // Check if the item is already in the cart
    if (cart.some((i) => i.id === item.id)) {
      // If the item is already in the cart, increase its quantity by 1
      setCart((currentCart) => {
        return currentCart.map((i) => {
          if (i.id === item.id) {
            return { ...i, quantity: i.quantity + 1 };
          }
          return i;
        });
      });
    } else {
      // If the item is not in the cart, add it to the cart
      item.quantity = 1;
      setCart((currentCart) => [...currentCart, item]);
    }
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => {
      // Find the item in the cart
      const existingItemIndex = currentCart.findIndex((i) => i.id === id);

      // If the item is not found, do nothing
      if (existingItemIndex === -1) {
        return currentCart;
      }

      // If the item's quantity is more than 1, reduce it by 1
      if (currentCart[existingItemIndex].quantity > 1) {
        return currentCart.map((cartItem, index) => {
          if (index === existingItemIndex) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        });
      } else {
        // If the item's quantity is 1, remove the item from the cart
        return currentCart.filter((_, index) => index !== existingItemIndex);
      }
    });
    console.log(cart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getSubtotal = () => {
    return cart.reduce((subtotal, item) => {
      return subtotal + item.price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
