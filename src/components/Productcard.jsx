import React from 'react'
import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { useCart } from '../context/CartContext'

const Productcard = ({ product }) => {
  const {addtocart} = useCart();
  return (
    <>
      <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center h-full border border-gray-800 transform group hover:scale-[1.03] transition duration-300 hover:shadow-lg hover:shadow-orange-900/40">
        <div className="p-5 flex flex-col grow overflow-hidden">
          <Link to={`/product/${product.id}`} className="h-56 relative cursor-pointer overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-56  object-cover object-center rounded-lg mb-4 transition duration-500 group-hover:scale-110 group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 bg-orange-600/95 text-white px-3 py-2 rounded-tr-lg rounded-bl-lg text-sm font-bold shadow-lg">
              ₹ {product.price.toFixed(2)}
            </div>
          </Link>
          <div className="flex flex-col grow">
            <Link to={`/product/${product.id}`} className="cursor-pointer">
              <h3 className="text-lg font-bold text-gray-300 cursor-pointer mb-2 hover:text-orange-400 transition duration-200 line-clamp-1">{product.name}</h3>
            </Link>
          <p className="text-gray-500 text-sm mb-4 line-clamp-3">{product.description}</p>
          <div className="flex items-center mt-auto text-xs text-gray-500 mb-4">
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full font-semibold text-gray-300 text-sm">
              {product.category}
            </span>
          </div>
          </div>
          <button onClick={()=>addtocart(product)} className="max-auto w-full py-3 bg-orange-600 text-white rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider">
            <ShoppingCart className="w-6 h-6 hover:text-orange-400 transition duration-200" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>


    </>

  )
}

export default Productcard
