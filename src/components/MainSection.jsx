import React, { useState } from "react";
import products from '../../public/products.json'
import ProductCard from "./ProductCard";

const MainSection = ({ cartItems, setCartItems }) => {
  return (

    const [activeTab, setActiveTab] = useState('products');

    const handleAddToCart = (product) => {
        const alreadyInCart = cartItems.find((item) => item.id === product.id);
        if(already)
    }

    <section className="py-6 mt-20 px-6 lg:px-20">
      {/* Main section content  */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-base text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="flex items-center gap-3 justify-center">
          <button className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] hover:opacity-90 transition-colors duration-200 cursor-pointer">
            Products
          </button>

          <button className="text-sm font-semibold px-5 py-2 border rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text hover:text-transparent transition-colors duration-200 cursor-pointer flex items-center gap-2">
            Cart (0)
          </button>
        </div>
      </div>

      <div className="mt-20">
        {/* Products container  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard />
        </div>

        {/* Cart View  */}
      </div>
    </section>
  );
};

export default MainSection;
