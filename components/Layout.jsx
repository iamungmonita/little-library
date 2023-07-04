import React from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
import RunningText from './RunningText/RunningText'
const Layout = ({children}) => {
  return (
    <div className=''>
        <RunningText/>
        <Navigation/>
          {children}
        <Footer/>
    </div>
  )
}

export default Layout