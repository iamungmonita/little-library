import React, { useEffect, useState } from 'react'
import {images} from '../constants/images'
import Image from 'next/image'
import style from '../styles/Home.module.scss'

const index = () => {

  const [autoSlide, setAutoSlide] = useState(false)
  const [autoSlideInverval, setAutoSlideInterval] = useState(5000)
  const [curr, setCurr] = useState(0)
   
  const prev = () => {
    setCurr( (curr) => (curr === 0 ? images.length - 1 : curr - 1))
    console.log(curr);
   }

   const next = () => {
    setCurr( (curr) => (curr === images.length - 1 ? 0 : curr + 1))
    console.log(curr);
   }

   useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInverval)
    return () => clearInterval(slideInterval)
   },[autoSlide])

  return (
    <div onClick={() => setAutoSlide(true)}>
      <div className='relative w-full mx-auto '>
        
        <div className={`${style.slider} transition-transform ease-out duration-500`} >
          {images.map((image) => <Image className={`${style.image} transition-transform ease-out duration-500`} style={{transform : `translateX(-${curr * 100}%)`}} key={image.id} src={image.pic} alt='image'></Image>)}
        </div>
        
        <div className='inset-0 flex justify-between items-center absolute text-2xl text-white px-5'>
          <button onClick={prev}>
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </button>
          <button onClick={next}>
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </button>
        </div>

        <div className={style.nav}>
          {images.map((_, i) => <div className={  ` ${style.dot} ${curr === i && 'p-1' }`}></div>)}
        </div>
        
      </div>
    </div>
  )
}

export default index