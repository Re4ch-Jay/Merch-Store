import React from 'react'

export default function ProductList(
                  {item,
                  removeFromCart,
                  incrementQuantity,
                  decrementQuantity,
                  calculateTotalPrice}) {
  return (
    <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src="https://m.media-amazon.com/images/I/7177d0aFt6L._AC_UY1100_.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
        <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
                <a href="#">{item.name}</a>
            </h3>
            <p className="ml-4">${item.price}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{item.category.name}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Quantity {item.quantity}</p>
        </div>
            <div className="flex gap-3">
                {
                    item.quantity <= 9 && <button onClick={() => incrementQuantity(item.id)}  className="w-8 h-8 bg-indigo-500 text-white rounded-full text-lg flex items-center justify-center">+</button>
                }
                <button onClick={() => decrementQuantity(item.id)}  className="w-8 h-8 bg-indigo-500 text-white rounded-full text-lg flex items-center justify-center">-</button>
                <button onClick={() => removeFromCart(item.id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            </div>
        </div>
    </li>
  )
}
