import React from 'react'
import './Header.css'
import { useState } from 'react';

const Header = () => {
  const [activeLang, setActiveLang] = useState('english')
  const [mobileHeaderMenu, setMobileHeaderMenu] = useState(false)

  const handleLangChange = (lang) => {
    setActiveLang(lang)
  }

  const handleMobileMenu = () => {
    setMobileHeaderMenu(!mobileHeaderMenu)
  }


  const headeMenuContent = ({className}) => {
    return  <ul className={className}>
    <li className='menu'>
      <a href='#'>Dying Temples</a>
    </li>
    <li className='menu'>
      <a href='#'>Free Temples</a>
    </li>
    <li className='menu'>
      <a href='#'>HeartBreaking Stories</a>
    </li>
    <li className='menu'>
      <a href='#'>HR & CE</a>
    </li>
    <li className='menu'>
      <a href='#'>Past Glory</a>
    </li>
    <li className='menu'>
      <a href='#'>Get In Touch</a>
    </li>
    <li className='menu'>
      <a href='#'>Media</a> 
    </li>
  </ul>
  }
  return (
    <div className='head'>
        {headeMenuContent({className: 'menu-section'})}
        <a className='menu-icon' onClick={handleMobileMenu}>
          <img src='https://static.consciousplanet.org/static/assets/img/menu-icon.svg' alt="menuIcon"/>
        </a>
        <div className={`mobile_menu ${mobileHeaderMenu ? 'open' : ''}`}>
          <button className='mob_menu_closeButton' onClick={handleMobileMenu}>x</button>
          {headeMenuContent({className: 'mobile_menu_list'})}
        </div>
        <div className='lang-section'>
            <a href='#' className={activeLang === 'english' ? 'active' : ''} onClick={() => handleLangChange('english')}>English</a>
            { ' | ' }
            <a href='#' className={activeLang === 'tamil' ? 'active' : ''} onClick={() => handleLangChange('tamil')}>தமிழ்</a>
        </div>
    </div>
  )
}

export default Header