import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center'>
            <Image
          src="/images/cart.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-[450px] w-[450px] object-contain dark:brightness-[0.2] dark:grayscale mix-blend-multiply"
        />
           <p className=' 
         text-3xl font-bold text-gray-800
        '>
            Oops cart is empty
            </p>
    </div>
  )
}

export default page