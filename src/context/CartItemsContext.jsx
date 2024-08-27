import { createContext, useState } from 'react';

const CartItemsContext = createContext();

export function CartItemsProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  
  function addItemsToCart(newItem) {
    setCartItems([...cartItems, { ...newItem, quantity: 1, subTotalPrice: newItem.price }]);
  }

  function removeFromCart(itemId) {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  }

  function incrementQuantity(itemId) {
    const updatedCartItems = cartItems.map(item =>
      item.id === itemId 
        ? { ...item, quantity: item.quantity + 1, subTotalPrice: (item.quantity + 1) * item.price } 
        : item
    );
    setCartItems(updatedCartItems);
  }

  function decrementQuantity(itemId) {
    const updatedCartItems = cartItems.map(item =>
      item.id === itemId
        ? { ...item, quantity: item.quantity - 1, subTotalPrice: (item.quantity - 1) * item.price }
        : item
    )
    .filter((item) => item.quantity > 0);

    setCartItems(updatedCartItems);
  }

  function calculateTotalPrice() {
    return cartItems.reduce((total, item) => total + item.subTotalPrice, 0).toFixed(2);
  }

  function calcTotalQuantity() {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <CartItemsContext.Provider value={{ 
        addItemsToCart, 
        removeFromCart, 
        setCartItems,
        cartItems, 
        incrementQuantity, 
        decrementQuantity, 
        calculateTotalPrice,
        calcTotalQuantity
    }}>
      {children}
    </CartItemsContext.Provider>
  );
}

export default CartItemsContext;