import React, { useState, useEffect } from "react";

const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(savedCart);

  const addToCart = (ebook) => {
    let cartExist = cart;
    let flag = false;
    cartExist.map((item, index) => {
      if (item.id === ebook.id) {
        flag = true;
        cartExist[index] = { id: item.id, count: item.count + ebook.count };
      }
    });
    if (flag) setCart(cartExist);
    else setCart([...cart, ebook]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
