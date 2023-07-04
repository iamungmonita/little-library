import React from 'react'
import Image from 'next/image'
import cam from '/Users/monitaung/little-library-tailwind/public/cambodia.jpeg'
const cambodia = () => {
  return (
    <div className=' flex flex-col justify-center'>
        <h1 className="animate__animated animate__slideInLeft">An animated element</h1>
        <div className='w-full text-center mb-10 cambodia_image'>
            <p className='translate-y-16 md:text-2xl lg:text-4xl'>Seoul to Phnom Penh, Phnom Penh to Asia</p>
        </div>
        <div className='bg-white w-full h-10 max-w-6xl mx-auto -translate-y-24 border-b border-black'></div>
        <p className='font-semibold text-2xl'>Cambodia</p>
        <div className=' max-w-6xl mx-auto'>
        <Image src={cam} height={200} width={1200} alt='cambodia'/>
        </div>
        
    </div>
  )
}

export default cambodia