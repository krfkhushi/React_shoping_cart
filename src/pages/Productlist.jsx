import React, { useState } from 'react'
import Serachfilter from '../components/Serachfilter'
import Catagoryfilter from '../components/Catagoryfilter'
import { useCart } from '../context/CartContext'
import Productcard from '../components/Productcard'
import { TbUserStar } from 'react-icons/tb'
const Productlist = () => {
  const { products } = useCart();
  const [SearchTerm, setSearchTerm] = useState(" ")
  const [SelectedCategory, setSelectedCategory] = useState("All")

  const filterproducts = products.filter((product)=>{
  const matchsearch = product.name.toLowerCase().includes(SearchTerm.toLowerCase())
  || product.description.toLowerCase().includes(SearchTerm.toLowerCase());

  const matchescategory = SelectedCategory === "All" || product.category === SelectedCategory ;
  return matchsearch && matchescategory ;
  })
  return (
    <>
      <div className="container mx-auto md:px-4 pt-8">
        <Serachfilter SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
        <Catagoryfilter SelectedCategory = {SelectedCategory} setSelectedCategory ={setSelectedCategory}/>
        <h2 className="text-2xl font-extrabold mx-auto px-4 md:px-3 pt-4">Featured Gear {products.length} Items</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items items-center gap-4 mt-4">
          {filterproducts.map((product, index) => (
            <Productcard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Productlist;
