import React from 'react'
import { useRouter } from 'next/router'

const index = ({article}) => {
  return (
    <div className='max-w-6xl mx-auto md:columns-2 bg-red-200 h-1/2'>
        {article.products.map((pro) => 
        <div key={pro.id} className='border border-black h-auto mb-2 p-2'>
            <h2 className='font-bold'>{pro.id}</h2>
            <p className=''>{pro.title}</p>
            <mark>${pro.price}.00</mark>
        </div>
        )}
    </div>
  )
}

export default index

export const getServerSideProps = async(context) => {
    const res = await fetch(`https://dummyjson.com/carts/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article,
        }
    }
}