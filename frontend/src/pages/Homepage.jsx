import React from "react";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Offers from "../components/Offers/Offers";
import Popular from "../components/Popular/Popular";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Offers />
      <Popular />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Homepage;
