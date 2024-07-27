import "./App.css";
import Navigationbar from "./components/Navbar/Navigationbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/skinCare" element={<Category category="skincare" />} />
          <Route path="/hairCare" element={<Category category="haircare" />} />
          <Route path="/makeUp" element={<Category category="makeup" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          {/* <Route path="/products" element={<Category category="products" />} />
          <Route path="/about" element={<Category category="about" />} />
          <Route path="/contact" element={<Category category="contact" />} />
          <Route path="/socialMedia" element={<Category category="SocialMedia" />} />
          <Route path="/socialMedia" element={<Category category="SocialMedia" />} />
          <Route path="/socialMedia" element={<Category category="SocialMedia" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
