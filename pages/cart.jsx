import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const cart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const getCart = async() => {
            const res = await fetch('https://dummyjson.com/carts')
            const data = await res.json()
            setCart(data.carts)
        }
        getCart()
    },[])
    console.log(cart);
  return (
    <div>
        {cart.map((e) => 
        <ul>
            <li><Link href={`/test/[id]`} as={`/test/${e.id}`}>{e.title}</Link></li>
        </ul>
        )}
    </div>
  )
}

export default cart