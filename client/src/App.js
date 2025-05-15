import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router"
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";                         
import PrivanteRoute from "./screens/privanteRoute";

const App = () => {
  return (
 <Router>
 <Routes>
       <Route path="/" element={ <HomeScreen />} exact/>
        <Route path="/search/:keyword" element={<HomeScreen />} exact/>
        <Route path="/page/:pagenumber" element={<HomeScreen />} exact/>
        <Route path="/search/:keyword/page/:pageNumber" element={<HomeScreen />} exact/>
        <Route path="/login" element={<Login /> } /> 
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/register" element={<Register /> } />
        <Route path="/profile" element={<PrivanteRoute><ProfileScreen /></PrivanteRoute>} />
        <Route path="/cart/:id?" element={ <CartScreen /> } /> 
        <Route path="/shipping" element={<PrivanteRoute><ShippingScreen /></PrivanteRoute>} />
        <Route path="/payment" element={<PrivanteRoute><PaymentScreen /></PrivanteRoute>} />
        <Route path="/placeorder/:id"  element={<PrivanteRoute><PlaceOrderScreen /></PrivanteRoute>} />
        <Route path="/order/:id" element={<PrivanteRoute><OrderScreen /></PrivanteRoute>}/>
        <Route path="*" element={NotFound} />
 </Routes>
    </Router>
  );
};

export default App;
