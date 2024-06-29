import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/skinCare" element={<Category category="skincare" />} />
          <Route path="/hairCare" element={<Category category="haircare" />} />
          <Route path="/makeUp" element={<Category category="makeup" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
