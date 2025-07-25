import React from "react";
import "./index.css";
import ShowProduct from "./Components/Product/ShowProduct.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/Product/ProductDetail";
import Navbar from "./Components/Navbar";
import SearchProduct from "./Components/Product/SearchProduct";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import once globally
import Profile from "./Components/User/Profile";
import Cart from "./Components/Cart";
import Address from "./Components/Address";
import CheckOut from "./Components/Checkout";
import OrderConfirmed from "./Components/OrderConfirmed";
import SlideShow from "./Components/Slideshow";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <ScrollToTop />
        <Navbar />
        <SlideShow />
        {/* Your Router / Navbar / Routes here */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        ></ToastContainer>
        <div className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<ShowProduct />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route
              path="/product/search/:term?"
              element={<SearchProduct />}
            ></Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/address" element={<Address />} />
            <Route path="/Checkout" element={<CheckOut />} />
            <Route
              path="/order-success/:orderid"
              element={<OrderConfirmed />}
            />
            <Route path="/contact" element={<ContactUs />} />
           
          </Routes>
        </div>
         <Footer />
      </Router>
    </div>
  );
};

export default App;
