import React from 'react'
import Navbar from './components/Navbar'
import Productlist from './pages/Productlist'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Productdetails from './pages/Productdetails'
import { ToastContainer, toast , Bounce } from 'react-toastify';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <div className="min-h-screen font-sans text-white bg-gray-950">
          <Navbar />
          <Routes>
            <Route path='/' element={<Productlist />} />
            <Route path='/product/:id' element={<Productdetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            {/* <Route path='/oderconformation' element={<Oderconformation />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
