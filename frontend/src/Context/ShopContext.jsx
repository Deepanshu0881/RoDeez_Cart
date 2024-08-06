import React, { createContext, useEffect, useState } from "react";
import { backend_url } from "../App";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await fetch(`${backend_url}/allproducts`);
        if (!productsResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const productsData = await productsResponse.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Fetch allproducts error:', error);
      }

      const authToken = localStorage.getItem("auth-token");
      if (authToken) {
        try {
          const cartResponse = await fetch(`${backend_url}/getcart`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'auth-token': authToken,
              'Content-Type': 'application/json',
            },
          });
          if (!cartResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const cartData = await cartResponse.json();
          setCartItems(cartData);
        } catch (error) {
          console.error('Fetch getcart error:', error);
        }
      }
    };

    fetchData();
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = products.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.new_price;
        } catch (error) {
          console.error('Error calculating total cart amount:', error);
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = products.find((product) => product.id === Number(item));
          totalItem += itemInfo ? cartItems[item] : 0;
        } catch (error) {
          console.error('Error calculating total cart items:', error);
        }
      }
    }
    return totalItem;
  };

  const addToCart = async (itemId) => {
    if (!localStorage.getItem("auth-token")) {
      alert("Please Login");
      return;
    }
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      try {
        await fetch(`${backend_url}/addtocart`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': authToken,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itemId }),
        });
      } catch (error) {
        console.error('Add to cart error:', error);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      try {
        await fetch(`${backend_url}/removefromcart`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': authToken,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itemId }),
        });
      } catch (error) {
        console.error('Remove from cart error:', error);
      }
    }
  };

  const contextValue = { products, getTotalCartItems, cartItems, addToCart, removeFromCart, getTotalCartAmount };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
