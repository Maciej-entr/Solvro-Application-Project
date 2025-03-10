import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Foter'
import Main from '../components/main/Main'

const BestSellers = () => {
  return (
    <div>
      <Navbar />
      <Main category="Cocktail" />
      <Footer />
    </div>
  )
}

export default BestSellers