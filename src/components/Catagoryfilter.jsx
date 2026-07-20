import React from 'react'
import { initialProducts } from '../data/Product'
import {Tag} from 'lucide-react'



const avaibaleCategories = ["All",...new Set(initialProducts.map((product) => product.category))];

const Catagoryfilter = ({SelectedCategory, setSelectedCategory}) => { 
  return (
    <>
      <div className="flex flex-wrap gap-4 border-b border-gray-800 pb-6">  
        <Tag className="w-6 h-6 text-orange-500 mt-2 mr-2 hidden sm:block" />
        {avaibaleCategories.map((category, index) => (
          <button
            key={category} 
            onClick={()=>setSelectedCategory(category)}
            className={`px-5 py-2 text-sm font-bold rounded-full transition-duration-300 shadow-md ${SelectedCategory === category ? "bg-orange-500 shadow-orange-800/50 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border border-gray-700 cursor-pointer transition-all duration-300"}`}
          >
            {category}
          </button>
        ))}
      </div>


    </>
  )
}

export default Catagoryfilter
