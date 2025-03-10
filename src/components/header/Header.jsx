import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'

const Header = () => {
  const navigate = useNavigate();

  const handleBestSellersClick = () => {
    navigate('/bestsellers');
  }

  return (
    <div className="main">
      <div className='header'>
        <div className="header-contents">
          <h2>Order your favourite drinks here</h2>
          <button onClick={handleBestSellersClick}>Best Sellers</button>
        </div>
      </div>
    </div>
  )
}

export default Header