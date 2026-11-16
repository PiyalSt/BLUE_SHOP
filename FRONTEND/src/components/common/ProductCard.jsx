import React from 'react'
import assets from '../../assets/assets'

const ProductCard = ({title, newPrice, oldPrice, imgURL}) => {
  return (
    <div className='w-full bg-white flex flex-col items-center justify-center gap-4 py-6 px-4 rounded-lg my-10'>
      <div className='w-full h-60'>
        <img className='w-full h-full object-cover' src={imgURL} alt="" />
      </div>
      <div className='text-center py-2 px-2 rounded-md'>
        <h2 className='text-sm text-neutral-900 font-medium'>{title}</h2>
        <div className='flex gap-10 items-center justify-center'>
          <p className='text-lg font-bold text-neutral-900'>৳ {newPrice}</p>
          <p className='line-through text-red-500'>৳ {oldPrice}</p>
        </div>
      </div>
      <div className='w-full'>
        <button className='w-full py-2 bg-blue-500 rounded-md shadow-neutral-900 text-white font-medium tracking-wider cursor-pointer active:scale-95 duration-300 transition-all'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard