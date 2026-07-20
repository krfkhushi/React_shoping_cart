import { createContext, useContext, useState, useMemo } from "react";
import { initialProducts } from "../data/Product"
import { ToastContainer, toast, Bounce } from 'react-toastify';

const CartContext = createContext();
export const CartProvider = ({ children }) => {

  // ADD ITEMS IN ASS TO CART..!
  const [cart, Setcart] = useState([]);
  const products = initialProducts;
  const addtocart = (product) => {
    toast.success('Item Added To Cart.', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    Setcart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)

      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  // REMOVE FROM CART..!!
  const removeFromCart = (productId, removeAll = false) => {
    toast.success('Item Removed From Cart.', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    Setcart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (!existingItem) return prevCart;
      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== productId)
      } else {
        return prevCart.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)
      }
    })
  }

  // CLEAR CART ..!!
  const clearCart = () => Setcart([]);

  // CART COUNTER ..!!
  const CartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart])

  // CART TOTAL PRICE ..!!
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0), [cart])


  return (
    <CartContext.Provider value={{ products, cart, cartTotal, CartCount, addtocart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);

