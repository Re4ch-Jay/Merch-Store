import React from 'react'
import ProductCard from './partials/ProductCard'
import { Head } from '@inertiajs/react'
import useCart from '@/hooks/useCart'
import Navbar from '@/Layouts/Navbar'
import useOpen from '@/hooks/useOpen'
import Footer from '@/Layouts/Footer'
import Checkout from './Checkout';

export default function Show({product, categories}) {
    const {open, setOpen} = useOpen();
    const {cart, addToCart, calculateTotalProduct, removeFromCart, incrementQuantity, decrementQuantity, calculateTotalPrice} = useCart();
  return (
    <div>
      <Navbar open={open} setOpen={setOpen} calculateTotalProduct={calculateTotalProduct} categories={categories} />
        <Head title={product.name + ' Merch'} />
        <ProductCard product={product} addToCart={addToCart} />
        {
          open && <Checkout
                  setOpen={setOpen}
                  cart={cart} 
                  removeFromCart={removeFromCart} 
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  calculateTotalPrice={calculateTotalPrice}
                   />
        }
      <Footer/>
    </div>
  )
}
