import React from 'react';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function Routing() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Landing  />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />

        </Routes>
        
    </Router>
  )
}

export default Routing