import React, { useState, useEffect } from "react";

const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(savedCart);

  const addToCart = (ebook) => {
    let cartExist = [...cart]; // Copy the current cart state
    let flag = false;
    //forEach vi no duyet qua mang k can map(tao ban sao )
    cartExist.forEach((item, index) => {
      if (item.id === ebook.id) {
        flag = true;
        cartExist[index] = { id: item.id, count: item.count + ebook.count };
      }
    });
    if (flag) {
      setCart(cartExist);
    } else {
      setCart([...cart, ebook]);
    }
  };

  const delToCart = (ebook) => {
    let cartExist = [...cart]; // Copy the current cart state
    let flag = false;
    let count = 0;
    //forEach vi no duyet qua mang k can map(tao ban sao )
    cartExist.forEach((item, index) => {
      count = item.count;
      if (item.id === ebook.id && count > 1) {
        flag = true;
        cartExist[index] = { id: item.id, count: item.count - ebook.count };
      }
    });
    if (flag) {
      setCart(cartExist);
    }
    if (flag === false && count === 0) {
      let updatedCart = cart.filter((item) => item.id !== ebook.id);
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateListCart = (cartNow) => {
    setCart(cartNow);
  };
  const logoutCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, delToCart, updateListCart, logoutCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
