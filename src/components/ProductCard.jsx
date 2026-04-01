import React from 'react'

const ProductCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
      {/* Card Header: Icon + Tag  */}
      <div className="flex items-start justify-between">
        <span className="text-3xl">Product icon</span>

        <span className="text-xs font-bold px-3 py-1 rounded-full" style={{}}>
          Product tag
        </span>
      </div>

      {/* Name & Description  */}
      <div>
        <h3 className="text-lg font-bold text-gray-900"> Product Name</h3>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          {" "}
          Product Description
        </p>
      </div>

      {/* Price  */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold text-gray-900">
          Product price
        </span>
        <span className="text-sm text-gray-400 font-medium">
          Product period
        </span>
      </div>

      {/* Features  */}
      <ul className="flex flex-col gap-2 flex-1">Product features</ul>

      {/* CTA  */}
      <button className="mt-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-l from-[#9514FA] to-[#4F39F6] cursor-pointer transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"> Buy Now</button>
      
    </div>
  );
}

export default ProductCard