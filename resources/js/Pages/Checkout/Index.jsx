import React from 'react';
import { Head } from '@inertiajs/react';
import useCart from '@/hooks/useCart';
import Navbar from '@/Layouts/Navbar';
import Footer from '@/Layouts/Footer';
import Modal from '@/Components/Modal';
import ProductList from '../Product/partials/ProductList';
import CheckoutGrid from './partials/CheckoutGrid';

export default function Index({ categories }) {
  const {
    cart,
    addToCart,
    calculateTotalProduct,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    calculateTotalPrice,
  } = useCart();

  return (
    <div>
      <Navbar open={open} calculateTotalProduct={calculateTotalProduct} categories={categories} />
      <Head title='Checkout' />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart Checkout</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                <span>Subtotal</span>
          
                <span>${calculateTotalPrice()}</span>
                </div>
                <div className="flex justify-between mb-2">
                <span>Taxes</span>
            
                <span>$0.99</span>
                </div>
                <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$2.99</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
         
                <span className="font-semibold">${calculateTotalPrice() + 3.98}</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
            </div>
            </div>
            <div className="md:w-3/4">
              {cart.map(item => (
                <div key={item.productId}>
                  <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left font-semibold">Product</th>
                          <th className="text-left font-semibold">Price</th>
                          <th className="text-left font-semibold">Quantity</th>
                          <th className="text-left font-semibold">Price Per Item</th>
                          <th onClick={() => removeFromCart(item.id)} className="cursor-pointer text-left font-semibold">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
                              <span className="font-semibold">{item.name}</span>
                            </div>
                          </td>
                          <td className="py-4">${item.price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button onClick={() => decrementQuantity(item.id)} className="border rounded-md py-2 px-4 mr-2">-</button>
                              <span className="text-center w-8">{item.quantity}</span>
                              <button onClick={() => incrementQuantity(item.id)} className="border rounded-md py-2 px-4 ml-2">+</button>
                            </div>
                          </td>
                          <td className="py-4">${item.price}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
