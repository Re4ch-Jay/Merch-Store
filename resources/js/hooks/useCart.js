import { useState, useEffect } from 'react';

function useCart() {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const cachedCart = localStorage.getItem('cart');
    if (cachedCart) {
      setCart(JSON.parse(cachedCart));
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalProduct = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    calculateTotalPrice,
    calculateTotalProduct,
  };
}

export default useCart;
