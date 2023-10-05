
import useCart from '@/hooks/useCart';
import ProductCard from './partials/ProductCard';
import Navbar from '@/Layouts/Navbar';
import Footer from '@/Layouts/Footer';
import Checkout from './Checkout';
import { Head } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import useSearch from '@/hooks/useSearch';
import useOpen from '@/hooks/useOpen';

function Index({products, categories, filters}) {

  const {open, setOpen} = useOpen();
  const {search, handleSearch} = useSearch(filters);
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
