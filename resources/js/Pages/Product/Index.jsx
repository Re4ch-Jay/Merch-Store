
import useCart from '@/hooks/useCart';
import React, { useState } from 'react';
import ProductCard from './partials/ProductCard';
import Navbar from '@/Layouts/Navbar';
import Footer from '@/Layouts/Footer';
import Checkout from './Checkout';
import { Head } from '@inertiajs/react';

function Index({products}) {
  const [open, setOpen] = useState(false);
  const { 
    cart, 
    addToCart,
    removeFromCart, 
    incrementQuantity, 
    decrementQuantity, 
    calculateTotalPrice,
    calculateTotalProduct 
  } = useCart();


  return (
    <div>
      <Head title="Merch"/>
      <Navbar open={open} setOpen={setOpen} calculateTotalProduct={calculateTotalProduct}/>
          <div className="py-12">
          <div className="grid grid-cols-3 gap-11 max-w-7xl mx-auto sm:px-6 lg:px-8">
              {products.map(product => (
                <div key={product.id}>

                  <ProductCard 
                  product={product} 
                  addToCart={addToCart} 
                  />
          
                </div>
              ))}
          </div>
        </div>
  
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
  );
}

export default Index;
