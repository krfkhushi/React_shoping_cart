import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Package, MapPin, Zap } from 'lucide-react'
import Oderconformation from '../pages/Oderconformation'
import { Link } from 'react-router-dom'


const Checkout = () => {
  const { cartTotal, clearCart, cart } = useCart();
  const [deliveryDetails, setdeliveryDetails] = useState({
    name: '',
    address: '',
    city: '',
    zip: ''
  });

  const [isConfirmed, setisConfirmed] = useState(false)

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setdeliveryDetails(prev => ({ ...prev, [name]: value }))
  }
  console.log(deliveryDetails)

  const SubmitHandler = (e) => {
    e.preventDefault();
    clearCart();
    setisConfirmed(true)
  }

  if (isConfirmed) return <Oderconformation deliveryDetails={deliveryDetails} />

  return (
    <>
      <div className='container mx-auto px-4 md:px-8 pt-8'>
        <h2 className='text-5xl font-extrabold text-white mb-10 tracking-tight '>Finalize Order</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800'>
            <h3 className='text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4'>
              <MapPin className='w-7 h-7 text-orange-400' />
              <span>Shipping Information</span>
            </h3>
            <form className='space-y-6' onSubmit={SubmitHandler}>
              {Object.keys(deliveryDetails).map((key) => {
                return (
                  <div key={key}>
                    <label htmlFor={key} className='block text-sm font-semibold text-gray-300 capitalize mb-1'>
                      {key === "zip" ? "pin code" : key}
                    </label>
                    <input text={key === "zip" ? "number" : "text"} id={key} name={key} value={deliveryDetails[key]} onChange={HandleChange} required className='mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner text-white bg-gray-800 placeholder-gray-500' />
                  </div>
                )
              })}
              <div className='pt-6 '>
                <button type='submit' className=" w-full  py-4 bg-orange-600 font-extrabold text-xl text-white rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider">
                  {/* <Zap className="w-6 h-6 hover:text-orange-400 transition duration-200" /> */}
                  <span>₹ Pay and Confirm Order (₹{cartTotal.toFixed(2)}) </span>
                </button>
              </div>
            </form>
          </div>


          {/* order Summary chackout */}

          <div className='g:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border-1-4 sticky top-22 h-fit border border-gray-800'>
            <h3 className='text-3xl font-bold text-white mb-5 border-b border-y-gray-700 pb-3 flex items-center space-x-2'>
              <Package className='w-6 h-6 text-orange-400 ' />
              <span>Summary</span>
            </h3>
            <div className='space-y-4 text-gray-400 '>
              {cart.map(item => <div key={item.id} className='flex justify-between text-base border-b border-gray-800 pb-2'>
                <span className='trucate text-gray-300'>{item.name}</span>
                <span className='font-medium text-orange-300'>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
              )}
              <div className="space-y-3 text-gray-400 ">
                <div className='flex justify-between text-xl '>
                  <span>SubTotal : </span>
                  <span className='font-semibold text-white'>₹ {cartTotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-xl '>
                  <span>Shipping (Express) : </span>
                  <span className='font-semibold text-green-400'>Free</span>
                </div>
                <div className='flex justify-between pt-6 border-t border-gray-700 '>
                  <span className='text-2xl font-extrabold text-white'>Total Due : </span>
                  <span className='text-3xl font-extrabold text-orange-400'>₹{cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
