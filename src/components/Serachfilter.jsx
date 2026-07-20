import React from 'react'
import { Search } from 'lucide-react'

const Serachfilter = ({SearchTerm, setSearchTerm}) => {
  return (
    <>
      <div className="mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl border-y-gray-800">
        <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-orange-600/50 transition-duration-300 bg-gray-800">
          <Search className="h-6 w-6 text-gray-500 ml-4" />
          <input type="text" placeholder="Search High Performance Products by Name or Feature..." className="w-full px-4 py-3 text-gray-200 bg-gray-800 placeholder-gray-500 text-base font-medium focus:outline-none" value={SearchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          <button className=" rounded-2xl text-lg mr-0 px-4 py-2 bg-orange-500 hover:bg-orange-600 transition-duration-300 text-white font-semibold">Search</button>
        </div>
      </div>
    </>
  )
}

export default Serachfilter
