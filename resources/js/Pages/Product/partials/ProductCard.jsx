import { Link } from '@inertiajs/react';

export default function ProductCard({
    product, 
    ...props
}) {


  return (
    <>
    <div {...props} className="w-full max-w-sm bg-white border rounded-lg shadow border-gray-700">
        
        <img className="p-8 rounded-t-lg" src="https://m.media-amazon.com/images/I/7177d0aFt6L._AC_UY1100_.jpg" alt="product image" />
     
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-90">{ product.name }</h5>
            </a>
            <a href="#">
                <h5 className="text-xl font-normal tracking-tight text-gray-90">{ product.category.name }</h5>
            </a>

            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-90">${ product.price }</span>
            </div>
        </div>
    </div>

    </>
  )
}
