import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function CustomerLayout({children}) {
  return (
    <div>
        <Navbar />
            {children}
        <Footer />
    </div>
  )
}
