import { Link } from '@inertiajs/react'
import React from 'react'

export default function Table({categories}) {
  return (
    <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-700">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category Name</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    {
                        categories.map((category, index) => (
                            <tr key={category.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{category.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap flex flex-row justify-between text-sm font-medium">
                                <Link href={route('categories.edit', category.id)} className="text-blue-500 hover:text-bluered-700">Edit</Link>
                                <Link href={route('categories.destroy', category.id)} method='delete' className="text-red-500 hover:text-red-700">Delete</Link>
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
