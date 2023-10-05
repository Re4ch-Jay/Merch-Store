import Modal from '@/Components/Modal';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react'

export default function ProductCard({
    product, 
    addToCart, 
}) {
    const [message, setMessage] = useState(false)

  return (
    <>
    <div className="w-full max-w-sm bg-white border rounded-lg shadow border-gray-700">
        <Link href={route('products.show', product.id)}>
            <img className="p-8 rounded-t-lg" src="https://m.media-amazon.com/images/I/7177d0aFt6L._AC_UY1100_.jpg" alt="product image" />
        </Link>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-90">{ product.name }</h5>
            </a>
            <a href="#">
                <h5 className="text-xl font-normal tracking-tight text-gray-90">{ product.category.name }</h5>
            </a>

            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-90">${ product.price }</span>
                <button onClick={() => {addToCart(product); setMessage(true)}} className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800">Add to cart</button>
            </div>
        </div>
    </div>
    <Modal show={message} onClose={() => setMessage(false)}>
        <h2 className="text-center text-4xl font-medium text-gray-900">
            Successfully added to cart
        </h2>

    </Modal>
    </>
  )
}
