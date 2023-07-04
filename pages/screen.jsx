import React, { useEffect, useState } from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'

const screen = () => {
  const show = () => {
    const group = document.getElementsByClassName('group')
    document.body.group.classList.add('hidden')
  }
  return (
    <div className='group'>
      hello
      <button className='' onClick={show}>click me</button>
      <BeakerIcon className="h-6 w-6 text-blue-500" />

    </div>
  )
}

export default screen