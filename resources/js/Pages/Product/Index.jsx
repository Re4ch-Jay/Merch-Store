
import useCart from '@/hooks/useCart';
import React, { useState, useEffect } from 'react';
import ProductCard from './partials/ProductCard';
import Navbar from '@/Layouts/Navbar';
import Footer from '@/Layouts/Footer';
import Checkout from './Checkout';
import { Head } from '@inertiajs/react';
import SearchBar from '@/Components/SearchBar';
import TextInput from '@/Components/TextInput';
import { Inertia } from "@inertiajs/inertia";

function Index({products, categories, filters}) {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(filters.search);
  const { 
    cart, 
    addToCart,
    removeFromCart, 
    incrementQuantity, 
    decrementQuantity, 
    calculateTotalPrice,
    calculateTotalProduct 
  } = useCart();
  

  const handleSearch = (search) => {
      setSearch(search)
      Inertia.get(route(route().current()), 
        { search: search }, 
        { 
          preserveState: true,
          replace: true,

        }
      );
  }

  return (
    <div>
      <Head title="Merch"/>
      <Navbar categories={categories} open={open} setOpen={setOpen} calculateTotalProduct={calculateTotalProduct} />
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='mt-10'>
            <TextInput
                name="search"
                isFocused={true}
                value={search}
                placeHolder="Search...."
                className="mt-1 block w-full"
                onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <div className="py-12">
            <div className="grid grid-cols-3 gap-11 ">
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
