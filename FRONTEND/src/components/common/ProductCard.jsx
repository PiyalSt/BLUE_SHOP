
import React from 'react'

const ProductCard = ({ title, newPrice, oldPrice, imgURL }) => {
  return (
    <div className='w-full h-110 bg-white flex flex-col gap-4 p-4 rounded-lg'>

      {/* Product Image */}
      <div className='w-full h-60 shrink-0'>
        <img
          className='w-full h-full object-contain'
          src={imgURL}
          alt={title}
        />
      </div>

      {/* Product Information */}
      <div className='flex-1 flex flex-col justify-center text-center'>
        <h2 className='text-sm text-neutral-900 font-medium line-clamp-2 min-h-10'>
          {title}
        </h2>

        <div className='flex gap-4 items-center justify-center'>
          <p className='text-lg font-bold text-neutral-900'>
            ৳ {newPrice}
          </p>

          <p className='line-through text-red-500'>
            ৳ {oldPrice}
          </p>
        </div>
      </div>

      {/* Add to Cart */}
      <div className='w-full mt-auto'>
        <button className='w-full py-2 bg-blue-500 rounded-md text-white font-medium cursor-pointer active:scale-95 duration-300 transition-all'>
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard
