import { Link } from '@inertiajs/react'
import React from 'react'

export default function Table({products}) {
  return (
    <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-700">
                <thead>
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    {
                        products.map((product, index) => (
                            <tr key={product.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{product.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${product.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{product.category.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap flex flex-row justify-between text-sm font-medium">
                                <Link href={route('products.edit', product.id)} className="text-blue-500 hover:text-bluered-700">Edit</Link>
                                <Link href={route('products.destroy', product.id)} className="text-red-500 hover:text-red-700">Delete</Link>
                            </td>
                            </tr>
                        ))
                    }
    
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
  )
}
